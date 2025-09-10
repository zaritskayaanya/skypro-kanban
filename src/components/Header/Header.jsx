import { Link } from "react-router-dom";
import Button from "../Button/Button";
import PopUser from "../PopUser/PopUser";
import {
  Dark,
  SHeader,
  SContainer,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  Img,
  HeaderUser,
} from "./Header.styled";

const Header = ({ isModalOpen, toggleModal }) => {
  return (
    <SHeader>
      <SContainer>
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <Img src="../images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo>
            <Dark>
              <a href="" target="_self">
                <Img src="../images/logo_dark.png" alt="logo" />
              </a>
            </Dark>
          </HeaderLogo>
          <HeaderNav>
            <Link to="/card/add">
              {" "}
              <Button text="Создать новую задачу" />
            </Link>
            <HeaderUser onClick={toggleModal}>Ivan Ivanov</HeaderUser>
            {isModalOpen ? <PopUser isModalOpen={isModalOpen} /> : null}
          </HeaderNav>
        </HeaderBlock>
      </SContainer>
    </SHeader>
  );
};

export default Header;
