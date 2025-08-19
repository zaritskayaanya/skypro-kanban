import Header from './components/Header/Header';
import Main from './components/Main/main';
import PopExit from './components/Popups/PopExit';
import PopNewCard from './components/Popups/PopNewCard';
import PopBrowse from './components/Popups/PopBrowse';
import { GlobalStyles } from './styles/GlobalStyles'; 

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;