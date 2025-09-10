import { Outlet } from "react-router-dom";
import "../App.css";
import { Wrapper } from "../Wrapper.styled";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
// import PopBrowse from "../components/PopBrowse/PopBrowse";
// import PopExit from "../components/PopExit/PopExit";
// import PopNewCard from "../components/PopNewCard/PopNewCard";
import { useState } from "react";

function MainPage({ loading}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Wrapper>
      {/* <PopExit setIsAuth={setIsAuth} />
      <PopNewCard />
      <PopBrowse /> */}
      <Header isModalOpen={isModalOpen} toggleModal={toggleModal} />
      <Main loading={loading} />
      <Outlet />
    </Wrapper>
  );
}

export default MainPage;
