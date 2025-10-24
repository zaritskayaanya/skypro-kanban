import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
`;

const NotFoundContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 60px 40px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const NotFoundCode = styled.h1`
  font-size: 120px;
  font-weight: 900;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
`;

const NotFoundTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin: 20px 0 10px 0;
`;

const NotFoundDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0 0 30px 0;
  line-height: 1.6;
`;

const BackButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 14px 40px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }

  &:active {
    transform: translateY(0);
  }
`;

const HomeButton = styled(BackButton)`
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
  margin-left: 12px;
  box-shadow: none;

  &:hover {
    background: #f8f9ff;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundCode>404</NotFoundCode>
        <NotFoundTitle>Страница не найдена</NotFoundTitle>
        <NotFoundDescription>
          К сожалению, страница, которую вы ищете, не существует или была
          удалена. Проверьте URL-адрес и попробуйте снова.
        </NotFoundDescription>
        <ButtonGroup>
          <BackButton onClick={handleGoBack}>← Вернуться назад</BackButton>
          <HomeButton onClick={handleGoHome}>На главную →</HomeButton>
        </ButtonGroup>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default NotFoundPage;