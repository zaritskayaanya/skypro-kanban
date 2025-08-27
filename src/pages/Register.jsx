import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [username, setUsername] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await auth.login({ username, password: 'pass' });
    navigate('/', { replace: true });
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Логин" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
