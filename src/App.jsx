import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import { GlobalStyles } from './styles/GlobalStyles';


function App() {
  const [isNewOpen, setIsNewOpen] = useState(false);

  return (
    <>
      <GlobalStyles />
      <div className="wrapper">
        <PopExit />
        <PopNewCard isOpen={isNewOpen} onClose={() => setIsNewOpen(false)} />
        <PopBrowse />
        <Header />
        <Main openNew={() => setIsNewOpen(true)} />
        <button onClick={() => setIsNewOpen(true)}>Создать задачу</button>
      </div>
    </>
  );
}

export default App;
