// components/PopUser/PopUser.jsx
import {
  PopUserWrapper,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from './SPopUser';

export default function PopUser({ onClose, onOpenExit, user }) {
  const name = user?.name ?? 'Пользователь';
  const mail = user?.email ?? '';

  return (
    <PopUserWrapper id="user-set-target" role="dialog" aria-label="Пользователь">
      <button
        aria-label="Закрыть"
        onClick={(e) => {
          e.preventDefault();
          onClose?.();
        }}
        style={{ background: 'transparent', border: 'none', cursor: 'pointer', position: 'absolute', top: 8, right: 8 }}
      >
        ×
      </button>

      <PopUserName>{name}</PopUserName>
      {mail && <PopUserMail>{mail}</PopUserMail>}

      <PopUserTheme>
        <p>Темная тема</p>
        <input type="checkbox" name="theme" aria-label="Темная тема" />
      </PopUserTheme>

      <PopUserButton
        type="button"
        onClick={(e) => {
          e.preventDefault();
          // Сначала вызываем глобальную логику открытия PopExit в App,
          // затем закрываем PopUser — порядок важен.
          try {
            onOpenExit?.();
          } catch (err) {
            // защищаемся от ошибок в callback
            // eslint-disable-next-line no-console
            console.error('PopUser: onOpenExit error', err);
          }
          onClose?.();
        }}
      >
        Выйти
      </PopUserButton>
    </PopUserWrapper>
  );
}
