import Card from "../Card/Card";
import CardLoader from "../CardLoader/CardLoader";
import { Cards, ColumnTitle, MainColumn, PTitle } from "./Column.styled";
const Column = ({ title, loading, tasks }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <PTitle>{title}</PTitle>
      </ColumnTitle>
      <Cards>
        {tasks
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