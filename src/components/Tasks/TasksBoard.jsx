import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function TasksBoard() {
  const { tasks, loadingTasks, fetchTasks, postTask, editTask, deleteTask, signOut, user } = useAuth();
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleAdd = async () => {
    if (!newTitle) return;
    try {
      await postTask({ title: newTitle, description: '', status: 'todo' });
      setNewTitle('');
    } catch (err) {
      console.error(err);
      alert(err.message || 'Ошибка при добавлении');
    }
  };

  if (loadingTasks) return <p>Загрузка задач...</p>;
  if (!user) return <p>Пожалуйста, войдите.</p>;

  return (
    <div>
      <h3>Доска задач — {user?.name || user?.login || 'Пользователь'}</h3>
      <button onClick={signOut}>Выйти</button>

      <div style={{ marginTop: 12 }}>
        <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Новая задача" />
        <button onClick={handleAdd}>Добавить</button>
      </div>

      <ul>
        {tasks?.length ? (
          tasks.map((t) => (
            <li key={t.id ?? t._id}>
              <strong>{t.title ?? t.name}</strong> — {t.status}
              <button onClick={() => deleteTask(t.id ?? t._id)}>Удалить</button>
            </li>
          ))
        ) : (
          <li>Нет задач</li>
        )}
      </ul>
    </div>
  );
}
