import Date from "../Date/Date/Date";
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
                <Date />
              </CardContent>
            </CardsCard>
          </CardsItem>
        </>
      )}
    </>
  );
};

export default Card;