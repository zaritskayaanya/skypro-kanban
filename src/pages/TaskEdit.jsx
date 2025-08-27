import { useParams, useNavigate } from 'react-router-dom';

export default function TaskEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    // Сохранение через API
    navigate(`/tasks/${id}`);
  };

  return (
    <div>
      <h1>Редактировать задачу #{id}</h1>
      <form onSubmit={handleSave}>
        <input defaultValue={`Задача ${id}`} />
        <textarea defaultValue="Описание" />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
}
