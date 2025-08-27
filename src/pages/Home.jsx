import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Главная</h1>
      <p>Привет{user ? `, ${user.name}` : '!'}</p>
      <nav>
        <Link to="/tasks/add">Добавить задачу</Link> | <Link to="/tasks/1">Просмотр задачи</Link>
      </nav>
    </div>
  );
}
