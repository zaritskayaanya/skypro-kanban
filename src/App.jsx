// src/App.jsx
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import { GlobalStyles } from './styles/GlobalStyles';
import AppRoutes from './routes/AppRoutes';
import { useAuth } from './context/AuthContext';

function App() {
  const [isExitOpen, setIsExitOpen] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);

  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const openNew = () => {
    // навигация на маршрут - AppRoutes должен содержать /tasks/new
    navigate('/tasks/new');
  };
  const closeNew = () => navigate(-1);

  const openExit = () => {
    // diagnostic log (remove in prod if not needed)
    // console.log('App: openExit called');
    setIsExitOpen(true);
  };
  const closeExit = () => setIsExitOpen(false);
  const confirmExit = () => {
    auth.logout();
    closeExit();
    navigate('/login', { replace: true });
  };

  const openBrowse = () => setIsBrowseOpen(true);
  const closeBrowse = () => setIsBrowseOpen(false);

  const isNewRoute = location.pathname === '/tasks/new';

  return (
    <>
      <GlobalStyles />
      <div className="wrapper">
        <PopExit isOpen={isExitOpen} onClose={closeExit} onConfirm={confirmExit} />
        <PopNewCard isOpen={isNewRoute} onClose={closeNew} />
        <PopBrowse isOpen={isBrowseOpen} onClose={closeBrowse} />

        <Header
          onOpenNew={openNew}
          onOpenExit={openExit}
          onOpenBrowse={openBrowse}
          user={auth.user}
        />

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
