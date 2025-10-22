import { Outlet } from "react-router-dom";
import "../App.css";
import { Wrapper } from "../Wrapper.styled";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { useState } from "react";
import { TasksProvider } from "../context/TasksProvider";

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <TasksProvider>
      <Wrapper>
        <Header isModalOpen={isModalOpen} toggleModal={toggleModal} />
        <Main />
        <Outlet />
      </Wrapper>
    </TasksProvider>
  );
}

export default MainPage;