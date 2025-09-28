import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { signIn as apiSignIn, signUp as apiSignUp } from '../services/auth';
import { setApiToken } from '../services/api';
import * as kanbanService from '../services/kanban';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loadingTasks, setLoadingTasks] = useState(false);
  const [error, setError] = useState(null);

  // Инициализация при старте приложения
  useEffect(() => {
    const t = localStorage.getItem('token');
    if (t) {
      setToken(t);
      setApiToken(t);
      loadTasks(t);
    }
  }, []);

  // wrapper: загрузить таски и записать в state
  const loadTasks = useCallback(async (maybeToken) => {
    const t = maybeToken ?? token;
    if (!t) {
      setTasks([]);
      return;
    }
    setLoadingTasks(true);
    try {
      setApiToken(t);
      const data = await kanbanService.fetchTasks();
      setTasks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('loadTasks error', err);
      setError(err.message);
    } finally {
      setLoadingTasks(false);
    }
  }, [token]);

  // signIn: вызывает сервис, извлекает токен/юзера, сохраняет и загружает таски
  const signIn = useCallback(async ({ login, password }) => {
    setLoadingAuth(true);
    setError(null);
    try {
      const res = await apiSignIn({ login, password });
        const tokenCandidate =
        res?.token ||
        res?.data?.token ||
        res?.data?.accessToken ||
        res?.accessToken ||
        res?.user?.token ||
        null;

      const userCandidate =
        res?.user || res?.data?.user || res?.data?.userData || res?.data || null;

      if (!tokenCandidate) {
        console.warn('signIn: token not found in response', res);
        throw new Error('Не найден токен в ответе сервера. Проверьте структуру ответа.');
      }

      // сохранить токен и установить заголовок
      localStorage.setItem('token', tokenCandidate);
      setToken(tokenCandidate);
      setApiToken(tokenCandidate);
      setUser(userCandidate);
      // загрузить таски после установки токена
      await loadTasks(tokenCandidate);
      return { token: tokenCandidate, user: userCandidate };
    } catch (err) {
      console.error('signIn error', err);
      setError(err.message);
      throw err;
    } finally {
      setLoadingAuth(false);
    }
  }, [loadTasks]);

  const signUp = useCallback(async ({ name, login, password }) => {
    setLoadingAuth(true);
    setError(null);
    try {
      const res = await apiSignUp({ name, login, password });
      // Если API сразу возвращает token — логиним пользователя автоматически
      const tokenCandidate =
        res?.token ||
        res?.data?.token ||
        res?.accessToken ||
        res?.data?.accessToken ||
        null;
      if (tokenCandidate) {
        localStorage.setItem('token', tokenCandidate);
        setToken(tokenCandidate);
        setApiToken(tokenCandidate);
        const userCandidate = res?.user || res?.data?.user || null;
        setUser(userCandidate);
        await loadTasks(tokenCandidate);
      }
      return res;
    } catch (err) {
      console.error('signUp error', err);
      setError(err.message);
      throw err;
    } finally {
      setLoadingAuth(false);
    }
  }, [loadTasks]);

  const signOut = useCallback(() => {
    localStorage.removeItem('token');
    setApiToken(null);
    setToken(null);
    setUser(null);
    setTasks([]);
  }, []);

  const refreshTasks = useCallback(() => loadTasks(), [loadTasks]);

  const postTask = useCallback(async (task) => {
    try {
      const res = await kanbanService.postTask(task);
      await loadTasks();
      return res;
    } catch (err) {
      throw err;
    }
  }, [loadTasks]);

  const editTask = useCallback(async (id, task) => {
    try {
      const res = await kanbanService.editTask(id, task);
      await loadTasks();
      return res;
    } catch (err) {
      throw err;
    }
  }, [loadTasks]);

  const deleteTask = useCallback(async (id) => {
    try {
      const res = await kanbanService.deleteTask(id);
      await loadTasks();
      return res;
    } catch (err) {
      throw err;
    }
  }, [loadTasks]);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        tasks,
        loadingAuth,
        loadingTasks,
        error,
        signIn,
        signUp,
        signOut,
        fetchTasks: refreshTasks,
        postTask,
        editTask,
        deleteTask,
        setUser, // при необходимости
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
