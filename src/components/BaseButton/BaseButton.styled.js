import styled from "styled-components";

export const SBaseButton = styled.button`
  width: 100%;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  &:hover{
    background-color: #33399b;
  &:disabled{
    background-color:rgba(148, 166, 190, 1);
    cursor: not-allowed;
  }
  @media screen and (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
  }
  }
`;