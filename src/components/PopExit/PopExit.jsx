// components/PopExit/PopExit.jsx
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  PopExitWrapper,
  PopExitContainer,
  PopExitBlock,
  PopExitTitle,
  PopExitForm,
  PopExitButtonYes,
  PopExitButtonNo,
} from './SPopExit';

export default function PopExit({ isOpen = false, onClose, onConfirm }) {
  if (!isOpen) return null;

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const handleOverlayMouseDown = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  const stopPropagation = (e) => e.stopPropagation();

  return createPortal(
    <div
      onMouseDown={handleOverlayMouseDown}
      aria-hidden={!isOpen}
      role="presentation"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.45)',
      }}
    >
      <div onMouseDown={stopPropagation}>
        <PopExitWrapper id="popExit" role="dialog" aria-modal="true" aria-labelledby="popExitTitle">
          <PopExitContainer>
            <PopExitBlock>
              <PopExitTitle id="popExitTitle">
                <h2>Выйти из аккаунта?</h2>
              </PopExitTitle>

              <PopExitForm id="formExit" action="#" onSubmit={(e) => e.preventDefault()}>
                <PopExitButtonYes
                  id="exitYes"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    onConfirm?.();
                  }}
                >
                  Да, выйти
                </PopExitButtonYes>

                <PopExitButtonNo
                  id="exitNo"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose?.();
                  }}
                >
                  Нет, остаться
                </PopExitButtonNo>
              </PopExitForm>
            </PopExitBlock>
          </PopExitContainer>
        </PopExitWrapper>
      </div>
    </div>,
    document.body
  );
}
