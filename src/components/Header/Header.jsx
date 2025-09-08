import { useState } from 'react';
import { Link } from 'react-router-dom';
import PopUser from '../PopUser/PopUser';
import {
  HeaderWrapper,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButtonNew,
  HeaderUser,
} from './SHeader';

export default function Header({ onOpenNew, onOpenExit, onOpenBrowse, user }) {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);

  const toggleUserPopup = () => setIsUserPopupOpen((s) => !s);
  const closeUserPopup = () => setIsUserPopupOpen(false);

  const userId = 'user-set-target';

  return (
    <HeaderWrapper className="header">
      <div className="container">
        <HeaderBlock>
          <HeaderLogo className="_show _light">
            <Link to="/">
              <img src="/assets/logo.png" alt="logo" />
            </Link>
          </HeaderLogo>

          <HeaderLogo className="_dark">
            <Link to="/">
              <img src="/assets/logo_dark.png" alt="logo" />
            </Link>
          </HeaderLogo>

          <HeaderNav>
            <HeaderButtonNew
              id="btnMainNew"
              type="button"
              onClick={() => onOpenNew?.()}
            >
              Создать новую задачу
            </HeaderButtonNew>

            {/* Рендерим HeaderUser как button (через `as="button"`). 
                Если ваш styled-component не поддерживает `as`, замените на <button className="..."> */}
            <HeaderUser
              as="button"
              type="button"
              aria-haspopup="dialog"
              aria-expanded={isUserPopupOpen}
              aria-controls={userId}
              onClick={toggleUserPopup}
            >
              {user?.name ?? 'Пользователь'}
            </HeaderUser>

            {isUserPopupOpen && (
              <PopUser
                id={userId}
                onClose={closeUserPopup}
                onOpenExit={onOpenExit} // пробрасываем из App напрямую
                user={user}
              />
            )}
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}
