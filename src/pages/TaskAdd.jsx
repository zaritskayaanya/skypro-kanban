import { useNavigate } from 'react-router-dom';

export default function TaskAdd() {
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div>
      <h1>Добавить задачу</h1>
      <form onSubmit={handleAdd}>
        <input placeholder="Название задачи" />
        <textarea placeholder="Описание" />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}
