import Card from '../Card/Card';
import { ColumnWrapper, ColumnTitle, CardsContainer } from './StyledColumn';

export default function Column({ title, cards }) {
  const filteredCards = cards.filter((card) => card.status === title);

  return (
    <ColumnWrapper className="column">
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer className="cards">
        {filteredCards.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
      </CardsContainer>
    </ColumnWrapper>
  );
}