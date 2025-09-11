import { Outlet } from "react-router-dom";
import "../App.css";
import { Wrapper } from "../Wrapper.styled";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { useCallback, useEffect, useState } from "react";
import { fetchTasks } from "../services/api";

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const getTasks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchTasks({
        // пока у нас не реализована авторизация, передаём токен вручную
        token: "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
      });
      if (data) setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Wrapper>
      <Header isModalOpen={isModalOpen} toggleModal={toggleModal} />
      <Main tasks={tasks} error={error} loading={loading} />
      <Outlet />
    </Wrapper>
  );
}

export default MainPage;