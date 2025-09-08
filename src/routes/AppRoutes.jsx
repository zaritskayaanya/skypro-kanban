import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import TaskAdd from '../pages/TaskAdd';
import TaskEdit from '../pages/TaskEdit';
import TaskView from '../pages/TaskView';
import LogoutModal from '../pages/LogoutModal';
import NotFound from '../pages/NotFound';
import ProtectedRoute from './ProtectedRoute';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function AppRoutes({ onOpenLogout }) {
  const [isLogoutOpen, setLogoutOpen] = useState(false);
  const auth = useAuth();

  const openLogout = () => {
    setLogoutOpen(true);
    // если нужно, пробросьте открытие в Header через callback:
    if (typeof onOpenLogout === 'function') onOpenLogout();
  };
  const closeLogout = () => setLogoutOpen(false);
  const confirmLogout = () => {
    auth.logout();
    closeLogout();
  };

  return (
    <>
      <LogoutModal open={isLogoutOpen} onClose={closeLogout} onConfirm={confirmLogout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/tasks/new"
          element={
            <ProtectedRoute>
              <TaskAdd />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tasks/:id/edit"
          element={
            <ProtectedRoute>
              <TaskEdit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tasks/:id"
          element={
            <ProtectedRoute>
              <TaskView />
            </ProtectedRoute>
          }
        />

        <Route
          path="/logout"
          element={
            <ProtectedRoute>
              <div>
                <h1>Выйти</h1>
                <p>Если вы видите эту страницу, лучше открыть LogoutModal из шапки.</p>
              </div>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
