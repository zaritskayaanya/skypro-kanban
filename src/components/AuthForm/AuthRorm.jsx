import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function AuthForm() {
  const { signIn, signUp, loadingAuth, error } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [login, setLogin] = useState('');
  const [name, setName] = useState(''); // для регистрации
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    try {
      if (isSignUp) {
        await signUp({ name, login, password });
        setMessage('Регистрация выполнена. Вы вошли в систему.');
      } else {
        await signIn({ login, password });
        setMessage('Вы успешно вошли.');
      }
    } catch (err) {
      setMessage(err.message || 'Ошибка');
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: '0 auto' }}>
      <h2>{isSignUp ? 'Регистрация' : 'Вход'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div>
            <label>Имя</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
        )}
        <div>
          <label>Login</label>
          <input value={login} onChange={(e) => setLogin(e.target.value)} required />
        </div>
        <div>
          <label>Пароль</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" disabled={loadingAuth}>
          {isSignUp ? 'Зарегистрироваться' : 'Войти'}
        </button>
      </form>

      <div style={{ marginTop: 12 }}>
        <button onClick={() => setIsSignUp((s) => !s)} type="button">
          {isSignUp ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
        </button>
      </div>

      {message && <p>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
