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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
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
    if (card && card._id) {
      setEditableTask({
        date: card.date || "",
        description: card.description || "",
        title: card.title || "",
        topic: card.topic || "",
        status: card.status || "",
      });
      setSelectedStatus(card.status || "");
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
    setSelectedStatus(card.status);
    setIsEditing(true);
    setError("");
    setSuccessMessage("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableTask({
      ...editableTask,
      [name]: value,
    });
    setError("");
  };

  const handleStatusClick = (statusName) => {
    setSelectedStatus(statusName);
    setEditableTask({ ...editableTask, status: statusName });
  };

  const saveChanges = async () => {
    // Валидация
    if (!editableTask.title.trim()) {
      setError("Название задачи не может быть пустым");
      return;
    }
    if (!editableTask.description.trim()) {
      setError("Описание задачи не может быть пустым");
      return;
    }
    if (!editableTask.status) {
      setError("Пожалуйста, выберите статус");
      return;
    }

    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const updateTasks = await redactTask({
        token: user.token,
        _id: card._id,
        task: editableTask,
      });
      setTasks(updateTasks);
      setSuccessMessage("Задача успешно обновлена!");
      setIsEditing(false);

      // Закрываем через 1 секунду
      setTimeout(() => {
        handleClose();
      }, 1000);
    } catch (error) {
      console.error("Ошибка при сохранении изменений:", error);
      setError(
        error.message || "Ошибка при сохранении изменений. Попробуйте снова."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTask = async (e) => {
    e.preventDefault();

    // Подтверждение удаления
    if (!window.confirm("Вы уверены, что хотите удалить эту задачу?")) {
      return;
    }

    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const newTasks = await deleteTask({
        token: user.token,
        _id: card._id,
      });
      setTasks(newTasks);
      setSuccessMessage("Задача успешно удалена!");

      // Закрываем через 1 секунду
      setTimeout(() => {
        handleClose();
      }, 1000);
    } catch (error) {
      console.error("Ошибка при удалении задачи:", error);
      setError(
        error.message || "Ошибка при удалении задачи. Попробуйте снова."
      );
    } finally {
      setLoading(false);
    }
  };

  const editChange = () => {
    setIsEditing(false);
    setError("");
    setSuccessMessage("");
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
                setSelected={(date) =>
                  setEditableTask({ ...editableTask, date })
                }
              />
            </PopBrowseWrap>
            {error && <ErrorPB $isError={true}>{error}</ErrorPB>}
            {successMessage && <ErrorPB $isSuccess={true}>{successMessage}</ErrorPB>}

            <PopBrowseBtnBrowse>
              {!isEditing && (
                <BtnGroup>
                  <BtnBor>
                    <BtnBorA onClick={startEditing}>
                      Редактировать задачу
                    </BtnBorA>
                  </BtnBor>
                  <BtnBor>
                    <BtnBorA onClick={handleDeleteTask} disabled={loading}>
                      Удалить задачу
                    </BtnBorA>
                  </BtnBor>
                </BtnGroup>
              )}
              {isEditing && (
                <BtnGroup>
                  <BtnBor>
                    <BtnBorA onClick={saveChanges} disabled={loading}>
                      {loading ? "Сохранение..." : "Сохранить"}
                    </BtnBorA>
                  </BtnBor>
                  <BtnBor>
                    <BtnBorA onClick={editChange} disabled={loading}>
                      Отменить
                    </BtnBorA>
                  </BtnBor>
                  <BtnBor>
                    <BtnBorA onClick={handleDeleteTask} disabled={loading}>
                      Удалить задачу
                    </BtnBorA>
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