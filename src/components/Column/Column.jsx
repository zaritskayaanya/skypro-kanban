import Card from "../Card/Card";

const Column = ({status, cards}) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{status}</p>
      </div>
      <div className="cards">
        {cards.map((card) => {
            return <Card date={card.date} title={card.title} topic={card.topic} key={card.id}/>
        })}
      </div>
    </div>
  );
};
export default Column;