import styled from "styled-components";

export const StyledCard = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  & p {
    color: ${({ $topic }) => {
      switch ($topic) {
        case "Web Design":
          return "#FF6D00";
        case "Reserch":
          return "#06B16E";
        case "Copywriting":
          return "#9A48F1";
        default:
          return "#FFFFFF";
      }
    }};
  }
  background-color: ${({ $topic }) => {
    switch ($topic) {
      case "Web Design":
        return "#FFE4C2";
      case "Reserch":
        return "#B4FDD1";
      case "Copywriting":
        return "#E9D4FF";
      default:
        return "#94A6BE";
    }
  }};
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  & div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  & h3 {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #000000;
    margin-bottom: 10px;
  }
`;
export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
  & svg {
    width: 13px;
  }
`;