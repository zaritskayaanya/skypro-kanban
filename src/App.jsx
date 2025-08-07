import "./App.css";
import Header from "./components/Header/Header";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopExit from "./components/PopExit/PopExit";
import { useState } from "react";
import cardList, { statusList } from "../data";
import Column from "./components/Column/Column";

function App() {
  const [cards, setCards] = useState(cardList);
  const addNewCard = (newCard) => {
    setCards((prev) => [...prev, newCard]);
  };
  console.log(cards);

  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopNewCard addNewCard={addNewCard} cards={cards} />
        <PopBrowse />
        <Header />
        <main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">
                {statusList.map((item) => (
                  <Column
                    key={item.id}
                    status={item.status}
                    cards={cards.filter((el) => el.status === item.status)}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;