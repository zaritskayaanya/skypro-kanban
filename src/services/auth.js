import api, { setApiToken } from './api';

function getErrorMessage(error) {
  return error?.response?.data?.error || error?.response?.data?.message || error?.message || 'Неизвестная ошибка';
}

export async function signIn({ login, password }) {
  try {
    const body = new URLSearchParams();
    body.append('login', login);
    body.append('password', password);

    const res = await api.post('/user/login', body);
    return res.data; 
  } catch (e) {
    throw new Error(getErrorMessage(e));
  }
}

export async function signUp({ name, login, password }) {
  try {
    const body = new URLSearchParams();
    body.append('login', login);
    body.append('name', name);
    body.append('password', password);

    const res = await api.post('/user', body);
    return res.data;
  } catch (e) {
    throw new Error(getErrorMessage(e));
  }
}

export { setApiToken };
