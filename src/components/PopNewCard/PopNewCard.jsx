import { useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import {
  Categories,
  CategoriesPSubttl,
  CategoriesTheme,
  CategoriesThemeActive,
  CategoriesThemeP,
  CategoriesThemes,
  PopBrowseContainer,
} from "../PopBrowse/PopBrowse.styled";
import {
  FormNewArea,
  FormNewBlock,
  FormNewCreate,
  FormNewInput,
  PopNewCardBlock,
  PopNewCardClose,
  PopNewCardContent,
  PopNewCardForm,
  PopNewCardTtl,
  PopNewCardWrap,
  SPopNewCard,
} from "./PopNewCard.styled";

const PopNewCard = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };

  return (
    <SPopNewCard id="popNewCard">
      <PopBrowseContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTtl>Создание задачи</PopNewCardTtl>
            <PopNewCardClose onClick={handleClose}>&#10006;</PopNewCardClose>
            <PopNewCardWrap>
              <PopNewCardForm id="formNewCard" action="#">
                <FormNewBlock>
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <FormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <FormNewArea
                    type="text"
                    name="text"
                    className="subttl"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></FormNewArea>
                </FormNewBlock>
              </PopNewCardForm>
              <Calendar />
            </PopNewCardWrap>
            <Categories>
              <CategoriesPSubttl>Категория</CategoriesPSubttl>
              <CategoriesThemes>
                <CategoriesThemeActive $background="#ffe4c2">
                  <CategoriesThemeP $color="#ff6d00">
                    Web Design
                  </CategoriesThemeP>
                </CategoriesThemeActive>
                <CategoriesTheme $background="#b4fdd1">
                  <CategoriesThemeP $color="#06b16e">Research</CategoriesThemeP>
                </CategoriesTheme>
                <CategoriesTheme $background="#e9d4ff">
                  <CategoriesThemeP $color="#9a48f1">
                    Copywriting
                  </CategoriesThemeP>
                </CategoriesTheme>
              </CategoriesThemes>
            </Categories>
            <FormNewCreate id="btnCreate">Создать задачу</FormNewCreate>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopBrowseContainer>
    </SPopNewCard>
  );
};

export default PopNewCard;
