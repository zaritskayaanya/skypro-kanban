import Calendar from "../Calendar/Calendar";
import { useNavigate, useParams } from "react-router-dom";

import { cardList } from "../../mock/data";

import Card from "../Card/Card";
import { useMemo } from "react";
import {
  BtnBg,
  BtnBgA,
  BtnBor,
  BtnBorA,
  BtnGroup,
  // Categories,
  FormBrowseArea,
  FormBrowseBlock,
  Gray,
  PopBrowseBlock,
  PopBrowseBtnBrowse,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  // PopBrowseStatus,
  // PopBrowseTopBlock,
  PopBrowseWrap,
  SPopBrowse,
  Status,
  StatusSubttlP,
  // StatusP,
  StatusTheme,
  StatusThemes,
  // Subttl,
} from "./PopBrowse.styled";
export const PopBrowse = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const card = useMemo(() => {
    if (!id) {
      return null;
    }
    return (
      cardList.find((card) => card.id === id) || {
        title: "",
        topic: "",
        status: "",
        id: "",
      }
    );
  }, [id]);

  if (!card) {
    return null;
  }

  const handleClose = () => {
    navigate("/");
  };

  return (
    <SPopBrowse>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <Card card={card} open={true} />
            <Status>
              <StatusSubttlP>Статус</StatusSubttlP>
              <StatusThemes>
                {/* <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div> */}
                <StatusTheme>
                  <Gray>Нужно сделать</Gray>
                </StatusTheme>
                {/* <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div> */}
              </StatusThemes>
            </Status>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <FormBrowseArea
                    name="text"
                    id="textArea01"
                    className="subttl"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></FormBrowseArea>
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar />
            </PopBrowseWrap>
            {/* <div className="theme-down__categories theme-down">
              <Categories><Subttl>Категория</Subttl></Categories>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div> */}
            <PopBrowseBtnBrowse>
              <BtnGroup>
                <BtnBor>
                  <BtnBorA>Редактировать задачу</BtnBorA>
                </BtnBor>
                <BtnBor>
                  <BtnBorA>Удалить задачу</BtnBorA>
                </BtnBor>
              </BtnGroup>
                <BtnBg onClick={handleClose}>
                  <BtnBgA>Закрыть</BtnBgA>
                </BtnBg>
            </PopBrowseBtnBrowse>
            {/*               <PopBrowseBtnBrowse className="pop-browse__btn-edit _hide">
               <BtnGroup>
                  <button className="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a></button>
                 <button className="btn-edit__edit _btn-bor _hover03"><a href="#">Отменить</a></button>
                 <button className="btn-edit__delete _btn-bor _hover03" id="btnDelete"><a href="#">Удалить задачу</a></button>
                </BtnGroup>
                <button className="btn-edit__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
              </PopBrowseBtnBrowse>  */}
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </SPopBrowse>
  );
};
//     <div className="pop-browse" id="popBrowse">
//       <div className="pop-browse__container">
//         <div className="pop-browse__block">
//           <div className="pop-browse__content">
//             <Card card={card} open={true} />
//             <div className="pop-browse__status status">
//               <p className="status__p subttl">Статус</p>
//               <div className="status__themes">
//                 <div className="status__theme _hide">
//                   <p>Без статуса</p>
//                 </div>
//                 <div className="status__theme _gray">
//                   <p className="_gray">Нужно сделать</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   <p>В работе</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   <p>Тестирование</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   <p>Готово</p>
//                 </div>
//               </div>
//             </div>
//             <div className="pop-browse__wrap">
//               <form
//                 className="pop-browse__form form-browse"
//                 id="formBrowseCard"
//                 action="#"
//               >
//                 <div className="form-browse__block">
//                   <label htmlFor="textArea01" className="subttl">
//                     Описание задачи
//                   </label>
//                   <textarea
//                     className="form-browse__area"
//                     name="text"
//                     id="textArea01"
//                     readOnly
//                     placeholder="Введите описание задачи..."
//                   ></textarea>
//                 </div>
//               </form>
//               <Calendar />
//             </div>
//             <div className="theme-down__categories theme-down">
//               <p className="categories__p subttl">Категория</p>
//               <div className="categories__theme _orange _active-category">
//                 <p className="_orange">Web Design</p>
//               </div>
//             </div>
//             <div className="pop-browse__btn-browse ">
//               <div className="btn-group">
//                 <button className="btn-browse__edit _btn-bor _hover03">
//                   <a href="#">Редактировать задачу</a>
//                 </button>
//                 <button className="btn-browse__delete _btn-bor _hover03">
//                   <a href="#">Удалить задачу</a>
//                 </button>
//               </div>
//               <button
//                 onClick={handleClose}
//                 className="btn-browse__close _btn-bg _hover01"
//               >
//                 <a href="#">Закрыть</a>
//               </button>
//             </div>
//             <div className="pop-browse__btn-edit _hide">
//               <div className="btn-group">
//                 <button className="btn-edit__edit _btn-bg _hover01">
//                   <a href="#">Сохранить</a>
//                 </button>
//                 <button className="btn-edit__edit _btn-bor _hover03">
//                   <a href="#">Отменить</a>
//                 </button>
//                 <button
//                   className="btn-edit__delete _btn-bor _hover03"
//                   id="btnDelete"
//                 >
//                   <a href="#">Удалить задачу</a>
//                 </button>
//               </div>
//               <button className="btn-edit__close _btn-bg _hover01">
//                 <a href="#">Закрыть</a>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default PopBrowse;
