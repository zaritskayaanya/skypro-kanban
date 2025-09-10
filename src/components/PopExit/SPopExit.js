import styled from 'styled-components';

export const PopExitWrapper = styled.div`
  width: 360px;
  max-width: calc(100% - 32px);
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 10px 40px rgba(26, 56, 101, 0.22);
  border: 1px solid rgba(148, 166, 190, 0.35);
  padding: 20px;
  box-sizing: border-box;
  color: #0b1a3a;
`;

export const PopExitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const PopExitBlock = styled.div`
  width: 100%;
  padding: 8px 12px;
`;

export const PopExitTitle = styled.div`
  text-align: center;
  h2 {
    margin: 0;
    font-size: 20px;
    line-height: 1.2;
    color: #161b2e;
    font-weight: 600;
  }
`;

export const PopExitForm = styled.form`
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media (max-width: 420px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const PopExitButtonYes = styled.button`
  min-width: 140px;
  height: 40px;
  background: #565eef;
  color: #ffffff;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.15s;

  &:hover {
    background: #3f46c9;
  }
`;

export const PopExitButtonNo = styled.button`
  min-width: 140px;
  height: 40px;
  background: transparent;
  color: #565eef;
  border: 1px solid rgba(86, 94, 239, 0.15);
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: #f2f4ff;
  }
`;
