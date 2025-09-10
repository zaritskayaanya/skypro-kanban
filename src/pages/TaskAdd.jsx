import { useNavigate } from 'react-router-dom';

export default function TaskAdd({ isModal }) {
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    // TODO: выполнить сохранение задачи через API / state
    // При открытии в модалке -- закрываем modal (navigate back),
    // при полном переходе -- можно перейти на список
    if (isModal) {
      navigate(-1); // закроет модалку (вернёт background)
    } else {
      navigate('/'); // полный переход
    }
  };

  const handleCancel = () => {
    if (isModal) navigate(-1);
    else navigate('/');
  };

  return (
    <div>
      <h1>{isModal ? 'Добавить задачу' : 'Добавление задачи'}</h1>
      <form onSubmit={handleAdd}>
        <input placeholder="Название задачи" />
        <textarea placeholder="Описание" />
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button type="submit">Добавить</button>
          <button type="button" onClick={handleCancel}>Отмена</button>
        </div>
      </form>
    </div>
  );
}
