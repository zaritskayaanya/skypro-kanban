import { useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import {
  Categories,
  CategoriesPSubttl,
  CategoriesTheme,
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
  ErrorMessage,
  SuccessMessage,
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
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Research");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    topic: "Research",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    topic: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Валидация формы
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Название задачи не может быть пустым";
    } else if (formData.title.trim().length < 3) {
      newErrors.title = "Название должно содержать минимум 3 символа";
    } else if (formData.title.trim().length > 100) {
      newErrors.title = "Название не должно превышать 100 символов";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Описание задачи не может быть пустым";
    } else if (formData.description.trim().length < 5) {
      newErrors.description = "Описание должно содержать минимум 5 символов";
    } else if (formData.description.trim().length > 500) {
      newErrors.description = "Описание не должно превышать 500 символов";
    }

    if (!formData.topic) {
      newErrors.topic = "Пожалуйста, выберите категорию";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Очищаем ошибку для этого поля при изменении
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
    setErrorMessage("");
  };

  const addNewTask = async (e) => {
    e.preventDefault();
    
    // Валидируем форму
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setErrorMessage("Пожалуйста, заполните все поля корректно");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const newTasks = await postTask({ token: user?.token, task: formData });
      setTasks(newTasks);
      setSuccessMessage("Задача успешно создана!");
      
      // Закрываем модальное окно через 1 секунду
      setTimeout(() => {
        handleClose();
      }, 1000);
    } catch (error) {
      console.error("Ошибка добавления задачи", error.message);
      setErrorMessage(
        error.message || "Ошибка при создании задачи. Попробуйте снова."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setFormData({ ...formData, topic: categoryName });
    if (errors.topic) {
      setErrors({ ...errors, topic: "" });
    }
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
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <FormNewInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={formData.title}
                    onChange={handleChange}
                    autoFocus
                    $hasError={!!errors.title}
                  />
                  {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
                </FormNewBlock>
                <FormNewBlock>
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <FormNewArea
                    type="text"
                    name="description"
                    className="subttl"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={handleChange}
                    $hasError={!!errors.description}
                  />
                  {errors.description && (
                    <ErrorMessage>{errors.description}</ErrorMessage>
                  )}
                </FormNewBlock>
              </PopNewCardForm>
              <Calendar />
            </PopNewCardWrap>
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
              {errors.topic && <ErrorMessage>{errors.topic}</ErrorMessage>}
            </Categories>

            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}

            <FormNewCreate onClick={addNewTask} disabled={loading}>
              {loading ? "Создание..." : "Создать задачу"}
            </FormNewCreate>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopBrowseContainer>
    </SPopNewCard>
  );
};

export default PopNewCard;