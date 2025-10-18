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
  ErrorPB,
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
  StatusThemeP,
  StatusThemes,
  Subttl,
  White,
} from "./PopBrowse.styled";
import { TasksContext } from "../../context/TasksContext";
import { AuthContext } from "../../context/AuthContext";
import { deleteTask, redactTask } from "../../services/api";

const statuses = [
  "Нужно сделать",
  "Без статуса",
  "В работе",
  "Тестирование",
  "Готово",
];

export const PopBrowse = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { _id } = useParams();
  const { tasks, setTasks } = useContext(TasksContext);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [editableTask, setEditableTask] = useState({
    date: null,
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
        date: card.date || "",
        description: card.description || "",
        title: "",
        topic: card.topic,
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

  const handleStatusClick = (statusName) => {
    setSelectedStatus(statusName);
    setEditableTask({ ...editableTask, status: statusName });
  };

  const saveChanges = async () => {
    setLoading(true);
    try {
      const updateTasks = await redactTask({
        token: user.token,
        _id: card._id,
        task: editableTask,
      });
      setTasks(updateTasks.tasks);
      setIsEditing(false);
      handleClose(true);
    } catch (error) {
      setError("Ошибка при сохранении изменений:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const editTask = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const newTasks = await deleteTask({
        token: user.token,
        _id: card._id,
      });
      setTasks(newTasks);
      handleClose();
    } catch (error) {
      setError("Ошибка при удалении задачи:", error.message);
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
                  {statuses.map((status, index) => (
                    <White
                      key={index}
                      $isActive={selectedStatus === status}
                      onClick={() => handleStatusClick(status)}
                      tasks={tasks.filter((task) => task.status === status)}
                    >
                      <StatusThemeP>{status}</StatusThemeP>
                    </White>
                  ))}
                </StatusThemes>
              )}
            </Status>
            <PopBrowseWrap>
              <PopBrowseForm
                id="formBrowseCard"
                onSubmit={(e) => e.preventDefault()}
              >
                <FormBrowseBlock>
                  <Subttl>Описание задачи</Subttl>
                  <FormBrowseArea
                    name="description"
                    id="description"
                    placeholder="Введите описание задачи..."
                    value={editableTask.description}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                    $isEditing={isEditing}
                  />
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar
                readOnly={!isEditing}
                isEditing={isEditing}
                selected={editableTask.date}
                setSelected={(date) => setEditableTask({ ...tasks, date })}
              />
            </PopBrowseWrap>
            <ErrorPB>{error}</ErrorPB>
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