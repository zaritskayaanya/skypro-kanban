import { useState } from "react";
import ModalWin from "../ModalWin/ModalWin";
import PopNewCard from "../PopNewCard/PopNewCard";
import {
  HeaderBlock,
  HeaderBtnMainNew,
  HeaderContainer,
  HeaderLogo,
  HeaderNav,
  HeaderUser,
  SHeader,
} from "./SHeader";

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
    <SHeader>
      <HeaderContainer>
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <img src="./assets/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo>
            <a href="" target="_self">
              <img src="./assets/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew onClick={openPopNewCard} id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderBtnMainNew>
            <HeaderUser onClick={toggleModal}>
              Ivan Ivanov
            </HeaderUser>
            {isModalOpen && <ModalWin />}
            {isPopNewCardOpen && (
              <PopNewCard
                addNewCard={addNewCard}
                cards={cards}
                isPopNewCardOpen={isPopNewCardOpen}
                setIsPopNewCardOpen={setIsPopNewCardOpen}
              />
            )}
          </HeaderNav>
        </HeaderBlock>
      </HeaderContainer>
    </SHeader>
  );
};

export default Header;