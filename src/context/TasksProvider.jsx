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
      setLoading(true);
      try {
        const data = await fetchTasks({ token: user.token });
        setTasks(data);
      } catch (error) {
        setError(error.message);
        console.error("Ошибка загрузки задач", error.message);
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, [user.token]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks, loading, error }}>
      {children}
    </TasksContext.Provider>
  );
};