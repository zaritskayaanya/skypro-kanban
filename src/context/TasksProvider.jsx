import { useContext, useState, useEffect } from "react";
import { fetchTasks } from "../services/api";
import { AuthContext } from "./AuthContext";
import { TasksContext } from "./TasksContext";

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const loadTasks = async () => {
      // Если пользователь не авторизован, не загружаем задачи
      if (!user || !user.token) {
        setLoading(false);
        setTasks([]);
        return;
      }

      setLoading(true);
      setError("");
      try {
        const data = await fetchTasks({ token: user.token });
        setTasks(data || []);
      } catch (error) {
        console.error("Ошибка загрузки задач", error.message);
        setError(error.message || "Ошибка при загрузке задач");
        setTasks([]);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, [user?.token]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks, loading, error }}>
      {children}
    </TasksContext.Provider>
  );
};