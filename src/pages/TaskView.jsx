import { useParams, Link } from 'react-router-dom';

export default function TaskView() {
  const { id } = useParams();
  return (
    <div>
      <h1>Задача #{id}</h1>
      <p>Детали задачи...</p>
      <Link to={`/tasks/${id}/edit`}>Редактировать</Link>
    </div>
  );
}
