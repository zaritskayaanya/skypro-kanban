import { Link } from "react-router-dom";
import {
  CardBtn,
  CardBtnDiv,
  CardContent,
  CardGroup,
  CardsCard,
  CardsItem,
  CardTheme,
  CardThemeP,
  CardTitle,
} from "./Card.styled";
import {
  Categories,
  CategoriesThemeActive,
  CategoriesThemeP,
  PopBrowseTopBlock,
  PopBrowseTtl,
} from "../PopBrowse/PopBrowse.styled";
import { CardDate, CardDateP, CardDateSvg } from "../Date/Date/date.styles";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const topicColors = {
  "Web Design": {
    background: "#ffe4c2",
    color: "#ff6d00",
  },
  Research: {
    background: "#b4fdd1",
    color: "#06b16e",
  },
  Copywriting: {
    background: "#e9d4ff",
    color: "#9a48f1",
  },
};

const Card = ({ open, card }) => {
  const topicStyle = topicColors[card?.topic] || {
    background: "#94a6be",
    color: "#ffffff",
  };

  return (
    <>
      {open ? (
        <PopBrowseTopBlock>
          <PopBrowseTtl>{card?.title}</PopBrowseTtl>
          <Categories>
            <CategoriesThemeActive $background={topicStyle.background}>
              <CategoriesThemeP $color={topicStyle.color}>
                {card?.topic}
              </CategoriesThemeP>
            </CategoriesThemeActive>
          </Categories>
        </PopBrowseTopBlock>
      ) : (
        <>
          <CardsItem id={card?._id}>
            <CardsCard>
              <CardGroup>
                <CardTheme $background={topicStyle.background}>
                  <CardThemeP $color={topicStyle.color}>
                    {card?.topic}
                  </CardThemeP>
                </CardTheme>
                <Link to={"/card/" + card?._id}>
                  <CardBtn>
                    <CardBtnDiv></CardBtnDiv>
                    <CardBtnDiv></CardBtnDiv>
                    <CardBtnDiv></CardBtnDiv>
                  </CardBtn>
                </Link>
              </CardGroup>
              <CardContent>
                <a href="" target="_blank">
                  <CardTitle>{card?.title}</CardTitle>
                </a>
                <CardDate>
                  <CardDateSvg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_415)">
                      <path
                        d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                        stroke="#94A6BE"
                        strokeWidth="0.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                        stroke="#94A6BE"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_415">
                        <rect width="13" height="13" fill="white" />
                      </clipPath>
                    </defs>
                  </CardDateSvg>
                  <CardDateP>
                    {format(card?.date, "dd.MM.yy", { locale: ru })}
                  </CardDateP>
                </CardDate>
              </CardContent>
            </CardsCard>
          </CardsItem>
        </>
      )}
    </>
  );
};

export default Card;