import { useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import {
  Categories,
  CategoriesPSubttl,
  CategoriesTheme,
  CategoriesThemeP,
  CategoriesThemes,
  ErrorPB,
  PopBrowseContainer,
  Subttl,
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
import { postTask } from "../../services/api";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { TasksContext } from "../../context/TasksContext";

const categories = [
  { name: "Web Design", background: "#ffe4c2", color: "#ff6d00" },
  { name: "Research", background: "#b4fdd1", color: "#06b16e" },
  { name: "Copywriting", background: "#e9d4ff", color: "#9a48f1" },
];

const PopNewCard = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    topic: "Research",
    status: "Без статуса",
    date: null,
  });

  // состояние ошибок
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    status: "",
    topic: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  const addNewTask = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const newTasks = await postTask({ token: user?.token, task: formData });
      setTasks(newTasks);
      handleClose(true);
    } catch (error) {
      setError("Ошибка добавления задачи", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setFormData({ ...formData, topic: categoryName });
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <SPopNewCard>
      <PopBrowseContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTtl>Создание задачи</PopNewCardTtl>
            <PopNewCardClose onClick={handleClose}>&#10006;</PopNewCardClose>
            <PopNewCardWrap>
              <PopNewCardForm onSubmit={addNewTask}>
                <FormNewBlock>
                  <Subttl>Название задачи</Subttl>
                  <FormNewInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={formData.name}
                    onChange={handleChange}
                    autoFocus
                  />
                </FormNewBlock>
                <FormNewBlock onSubmit={(e) => e.preventDefault()}>
                  <Subttl>Описание задачи</Subttl>
                  <FormNewArea
                    type="text"
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formData.text}
                    onChange={handleChange}
                  ></FormNewArea>
                </FormNewBlock>
              </PopNewCardForm>
              <Calendar
                selected={formData.date}
                setSelected={(date) => setFormData({ ...formData, date })}
              />
            </PopNewCardWrap>
            <ErrorPB>{error}</ErrorPB>
            <Categories>
              <CategoriesPSubttl>Категория</CategoriesPSubttl>
              <CategoriesThemes>
                {categories.map((category) => (
                  <CategoriesTheme
                    key={category.name}
                    $background={category.background}
                    $isActive={selectedCategory === category.name}
                    onClick={() => handleCategoryClick(category.name)}
                  >
                    <CategoriesThemeP $color={category.color}>
                      {category.name}
                    </CategoriesThemeP>
                  </CategoriesTheme>
                ))}
              </CategoriesThemes>
            </Categories>
            <FormNewCreate onClick={addNewTask}>Создать задачу</FormNewCreate>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopBrowseContainer>
    </SPopNewCard>
  );
};

export default PopNewCard;