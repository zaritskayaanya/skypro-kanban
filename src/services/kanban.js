import api from './api';

function getErrorMessage(error) {
  return (
    error?.response?.data?.error ||
    error?.response?.data?.message ||
    error?.message ||
    'Неизвестная ошибка'
  );
}

export async function fetchTasks() {
  try {
    const res = await api.get('/kanban');
    return res.data.tasks ?? res.data ?? [];
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function postTask(task) {
  try {
    const res = await api.post('/kanban', task);
    return res.data.tasks ?? res.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function editTask(id, task) {
  try {
    const res = await api.patch(`/kanban/${id}`, task);
    return res.data.tasks ?? res.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function deleteTask(id) {
  try {
    const res = await api.delete(`/kanban/${id}`);
    return res.data.tasks ?? res.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}
