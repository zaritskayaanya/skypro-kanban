import "./App.css";
import Header from "./components/Header/Header";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopExit from "./components/PopExit/PopExit";
import { useEffect, useState } from "react";
import cardList, { statusList } from "../data";
import Column from "./components/Column/Column";

function App() {
  const [cards, setCards] = useState(cardList);
  const addNewCard = (newCard) => {
    setCards((prev) => [...prev, newCard]);
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <>
      <div className="wrapper">
        <PopExit />

        <PopBrowse />
        <Header addNewCard={addNewCard} cards={cards} />
        <main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">
                {loading ? (
                  <p style={{ textAlign: "center", width: '100%', fontSize: '24px'}}>Данные загружаются...</p>
                ) : (
                  statusList.map((item) => (
                    <Column
                      key={item.id}
                      status={item.status}
                      cards={cards.filter((el) => el.status === item.status)}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      <script type="module" src="/src/main.jsx"></script>
    </>
  );
}

export default App;
