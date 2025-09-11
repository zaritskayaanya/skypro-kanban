import { cardList } from "../../mock/data";
import Card from "../Card/Card";
import CardLoader from "../CardLoader/CardLoader";
import { Cards, ColumnTitle, MainColumn, PTitle } from "./Column.styled";
const Column = ({ title, loading }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <PTitle>{title}</PTitle>
      </ColumnTitle>
      <Cards>
        {cardList
          .filter((card) => card.status === title)
          .map((card) =>
            loading ? (
              <CardLoader key={card.id} />
            ) : (
              <Card card={card} key={card.id} />
            )
          )}
      </Cards>
    </MainColumn>
  );
};

export default Column;
