import { useLocation, useNavigate } from 'react-router-dom';

export default function CreateTaskButton() {
  const location = useLocation();
  const navigate = useNavigate();

  const openModal = () => {
     console.log('OPEN_BUTTON location =', location);
    navigate('/tasks/new', { state: { background: location } });
  };

  return <button onClick={openModal}>Создать новую задачу</button>;
}
