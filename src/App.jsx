import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import { GlobalStyles } from './styles/GlobalStyles';
import AppRoutes from './routes/AppRoutes';
import { useAuth } from './context/AuthContext';


function App() {
  const [isNewOpen, setIsNewOpen] = useState(false);
  const [isExitOpen, setIsExitOpen] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);

  const auth = useAuth();
  const navigate = useNavigate();

  const openNew = () => setIsNewOpen(true);
  const closeNew = () => setIsNewOpen(false);

  const openExit = () => setIsExitOpen(true);
  const closeExit = () => setIsExitOpen(false);
  const confirmExit = () => {
    // Выполнить выход и перенаправить на страницу входа
    auth.logout();
    closeExit();
    navigate('/login', { replace: true });
  };

  const openBrowse = () => setIsBrowseOpen(true);
  const closeBrowse = () => setIsBrowseOpen(false);

  return (
    <>
      <GlobalStyles />
      <div className="wrapper">
        <PopExit isOpen={isExitOpen} onClose={closeExit} onConfirm={confirmExit} />
        <PopNewCard isOpen={isNewOpen} onClose={closeNew} />
        <PopBrowse isOpen={isBrowseOpen} onClose={closeBrowse} />
        <Header onOpenNew={openNew}
          onOpenExit={openExit}
          onOpenBrowse={openBrowse}
          user={auth.user}/>
        <Main>
          <AppRoutes />
        </Main>
        <button className="fab-create" onClick={openNew}>
          Создать задачу
        </button>
      </div>
    </>
  );
}

export default App;
