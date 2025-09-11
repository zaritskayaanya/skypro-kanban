import styled from "styled-components";

export const SCardLoader = styled.div`
  background-color: rgba(255, 255, 255, 1);
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  margin-bottom: 10px;
    @media screen and (max-width: 1200px) {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
  }
`;

export const LCardTheme = styled.div`
  padding: 15px 14px 15px 0px;
`;
export const LCardBtn = styled.div`
  padding: 2px;
`;