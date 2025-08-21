import { useEffect } from 'react';
import Calendar from "../Calendar/Calendar";

export default function PopNewCard({ isOpen = false, onClose = () => {} }) {
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    // блокируем скролл фона, когда открыта модалка
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={`pop-new-card ${isOpen ? 'open' : ''}`} id="popNewCard" onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-hidden={!isOpen}>
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content" onClick={(e)=>e.stopPropagation()}>
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a
              href="#"
              className="pop-new-card__close"
              onClick={(e) => { e.preventDefault(); onClose(); }}
              aria-label="Закрыть"
            >
              &#10006;
            </a>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">Название задачи</label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    autoComplete="off"
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">Описание задачи</label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  />
                </div>
              </form>
              <Calendar />
            </div>

            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="categories__theme _web-design _active-category"><p className="_web-design">Web Design</p></div>
                <div className="categories__theme _research"><p className="_research">Research</p></div>
                <div className="categories__theme _copywriting"><p className="_copywriting">Copywriting</p></div>
              </div>
            </div>

            <button className="form-new__create _hover01" id="btnCreate" type="button" onClick={() => { /* TODO: обработка создания */ onClose(); }}>
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
