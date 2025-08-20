import Header from './components/Header/Header';
import Main from './components/Main/main';
import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopExit/PopNewCard';
import PopBrowse from './components/PopExit/PopBrowse';
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