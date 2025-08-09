import React from "react";
import Card from "../Card/Card";

const Column = ({ status, cards }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{status}</p>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            date={card.date}
            title={card.title}
            topic={card.topic}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
