import Card from "../Card/Card";
import { ColumnCard, ColumnTitle, MainColumn } from "./StyledColumn";

const Column = ({ status, cards }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{status}</p>
      </ColumnTitle>
      <ColumnCard>
        {cards.map((card) => {
          return (
            <Card
              date={card.date}
              title={card.title}
              topic={card.topic}
              key={card.id}
            />
          );
        })}
      </ColumnCard>
    </MainColumn>
  );
};
export default Column;