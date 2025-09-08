// src/pages/TaskView.jsx
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function TaskView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(Boolean(id));
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    if (!id) {
      setTask(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    // Замените URL на ваш реальный API при наличии
    fetch(`/api/tasks/${id}`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) throw new Error('Задача не найдена');
          throw new Error(`Ошибка сервера: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        setTask(data);
      })
      .catch((err) => {
        if (!mounted) return;
        // если API не доступно — используем заглушку
        console.warn('TaskView fetch error, using stub:', err);
        setTask({ id, title: `Задача ${id}`, description: 'Описание (локальный stub).' });
        // setError(err.message ?? 'Ошибка загрузки');
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) return <div>Загрузка задачи...</div>;
  if (error) return (
    <div>
      <p>Ошибка: {error}</p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );

  if (!task) return (
    <div>
      <p>Задача не найдена.</p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );

  return (
    <div>
      <h1>{task.title ? `${task.title} (ID: ${id})` : `Задача #${id}`}</h1>
      <p>{task.description}</p>

      <div style={{ marginTop: 16 }}>
        <button onClick={() => navigate(-1)}>Назад</button>
        <Link to={`/tasks/${id}/edit`} style={{ marginLeft: 8 }}>
          Редактировать
        </Link>
      </div>
    </div>
  );
}
