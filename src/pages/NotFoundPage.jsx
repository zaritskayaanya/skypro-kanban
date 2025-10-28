import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import styled from "styled-components";

const SElement = styled.div`
  margin-top: 150px;
  display: flex;
  gap: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SText = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

const NotFoundPage = () => {
  return (
    <SElement>
      <SText>Страница не найдена</SText>
      <Link to="/">
        <Button text="Главная страница" />
      </Link>
    </SElement>
  );
};

export default NotFoundPage;