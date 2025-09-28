import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wedev-api.sky.pro/api',
});

export function setApiToken(token) {
  if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete api.defaults.headers.common['Authorization'];
}

export default api;
