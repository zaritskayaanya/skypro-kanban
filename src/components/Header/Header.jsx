import { useState } from "react";
import ModalWin from "../ModalWin/ModalWin";
import PopNewCard from "../PopNewCard/PopNewCard";

const Header = ({ addNewCard, cards }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopNewCardOpen, setIsPopNewCardOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const openPopNewCard = () => {
    setIsPopNewCardOpen(true);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="/assets/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="/assets/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button
              onClick={openPopNewCard}
              className="header__btn-main-new _hover01"
              id="btnMainNew"
            >
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <span onClick={toggleModal} className="header__user _hover02">
              Ivan Ivanov
            </span>
            {isModalOpen && <ModalWin />}
            {isPopNewCardOpen && (
              <PopNewCard
                addNewCard={addNewCard}
                cards={cards}
                isPopNewCardOpen={isPopNewCardOpen}
                setIsPopNewCardOpen={setIsPopNewCardOpen}
              />
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;