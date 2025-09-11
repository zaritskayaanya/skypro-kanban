import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Берём весь объект from (чтобы не потерять state, например background)
  const from = location.state?.from || { pathname: '/' };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await auth.login({ username, password });
    if (res.ok) {
      // Навигируем обратно, сохраняя исходный state (включая background)
      // Вариант 1 — передать объект location
      navigate(from, { replace: true });

      // Вариант 2 — если хотите явно:
      // navigate(from.pathname, { state: from.state, replace: true });
    } else {
      alert('Не удалось войти');
    }
  };

  return (
    <div>
      <h1>Вход</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Логин" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input placeholder="Пароль" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Войти</button>
      </form>
      <p>
        Нет аккаунта? <Link to="/register">Регистрация</Link>
      </p>
    </div>
  );
}
