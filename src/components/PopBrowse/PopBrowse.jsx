import Calendar from "../Calendar/Calendar";
import { useNavigate, useParams } from "react-router-dom";

import Card from "../Card/Card";
import { useContext, useEffect, useMemo, useState } from "react";
import {
  BtnBg,
  BtnBgA,
  BtnBor,
  BtnBorA,
  BtnGroup,
  FormBrowseArea,
  FormBrowseBlock,
  Gray,
  PopBrowseBlock,
  PopBrowseBtnBrowse,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  PopBrowseWrap,
  SPopBrowse,
  Status,
  StatusSubttlP,
  StatusTheme,
  StatusThemes,
  White,
} from "./PopBrowse.styled";
import { TasksContext } from "../../context/TasksContext";
import { AuthContext } from "../../context/AuthContext";
import { deleteTask, redactTask } from "../../services/api";

export const PopBrowse = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { _id } = useParams();
  const { tasks, setTasks } = useContext(TasksContext);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editableTask, setEditableTask] = useState({
    date: "",
    description: "",
    status: "",
    title: "",
    topic: "",
  });

  const card = useMemo(() => {
    if (!_id) {
      return null;
    }
    return (
      tasks.find((c) => c._id === _id) || {
        date: "",
        description: "",
        title: "",
        topic: "",
        status: "",
        _id: "",
      }
    );
  }, [_id, tasks]);

  useEffect(() => {
    if (card) {
      setEditableTask({
        date: "",
        description: "",
        title: "",
        topic: "",
        status: "",
      });
    }
  }, [card]);

  const startEditing = () => {
    setEditableTask({
      date: card.date,
      description: card.description,
      title: card.title,
      topic: card.topic,
      status: card.status,
    });
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableTask({
      ...editableTask,
      [name]: value,
    });
  };

  const saveChanges = async () => {
    setLoading(true);
    try {
      const updateTasks = await redactTask({
        token: user.token,
        _id: card._id,
        task: editableTask,
      });
       console.log(card);
      setTasks(updateTasks);
      setIsEditing(false);
      handleClose();
      navigate("/");
    } catch (error) {
      console.error("Ошибка при сохранении изменений:", error.message);
    
      } finally {
      setLoading(false);
    }
  };

  const editTask = async () => {
    setLoading(true);
    try {
      const newTasks = await deleteTask({
        token: user.token,
        _id: card._id,
      });
      setTasks(newTasks);
      handleClose();
      navigate("/");
    } catch (error) {
      console.error("Ошибка при удалении задачи:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const editChange = () => {
    setIsEditing(false);
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <SPopBrowse>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <Card key={card?._id} card={card} open={true} />
            <Status>
              <StatusSubttlP>Статус</StatusSubttlP>

              {!isEditing && (
                <StatusThemes>
                  <StatusTheme>
                    <Gray>{card?.status}</Gray>
                  </StatusTheme>
                </StatusThemes>
              )}
              {isEditing && (
                <StatusThemes>
                  <White>Нужно сделать</White>
                  <StatusTheme>
                    <Gray>{card?.status}</Gray>
                  </StatusTheme>
                  <White>В работе</White>
                  <White>Тестирование</White>
                  <White>Готово</White>
                </StatusThemes>
              )}
            </Status>
            <PopBrowseWrap>
              <PopBrowseForm
                id="formBrowseCard"
                onSubmit={(e) => e.preventDefault()}
              >
                <FormBrowseBlock>
                  <label htmlFor="description" className="subttl">
                    Описание задачи
                  </label>
                  <FormBrowseArea
                    name="description"
                    id="description"
                    className="subttl"
                    placeholder="Введите описание задачи..."
                    value={editableTask.description || card.description}
										onChange={handleInputChange}
										readOnly={!isEditing}
										$isEditing={isEditing}
                  />
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar />
            </PopBrowseWrap>
            <PopBrowseBtnBrowse>
              {!isEditing && (
                <BtnGroup>
                  <BtnBor>
                    <BtnBorA onClick={startEditing}>
                      Редактировать задачу
                    </BtnBorA>
                  </BtnBor>
                  <BtnBor>
                    <BtnBorA onClick={editTask}>Удалить задачу</BtnBorA>
                  </BtnBor>
                </BtnGroup>
              )}
              {isEditing && (
                <BtnGroup>
                  <BtnBor onClick={saveChanges}>
                    <BtnBorA>Сохранить</BtnBorA>
                  </BtnBor>
                  <BtnBor>
                    <BtnBorA onClick={editChange}>Отменить</BtnBorA>
                  </BtnBor>
                  <BtnBor>
                    <BtnBorA onClick={editTask}>Удалить задачу</BtnBorA>
                  </BtnBor>
                </BtnGroup>
              )}
              <BtnBg onClick={handleClose}>
                <BtnBgA>Закрыть</BtnBgA>
              </BtnBg>
            </PopBrowseBtnBrowse>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </SPopBrowse>
  );
};
export default PopBrowse;