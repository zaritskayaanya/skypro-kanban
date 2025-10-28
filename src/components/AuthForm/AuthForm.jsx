import { Link, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import {
  FTitle,
  Modal,
  Bg,
  FWrapper,
  Form,
  InputWrapper,
  FormGroupP,
  FormGroupPLink,
} from "./AuthForm.styled";
import BaseButton from "../BaseButton/BaseButton";
import { useContext, useState } from "react";
import { signIn, signUp } from "../../services/auth";
import { ErrorP } from "../Input/Input.styled";
import { AuthContext } from "../../context/AuthContext";

const AuthForm = ({ isSignUp }) => {
  const navigate = useNavigate();
  const { updateUserInfo } = useContext(AuthContext);
  // Получаем setUser из хука useContext
  // состояние полей
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  // состояние ошибок
  const [errors, setErrors] = useState({
    name: "",
    login: "",
    password: "",
  });

  // состояние текста ошибки, чтобы показать её пользователю
  const [error, setError] = useState("");

  // функция валидации
  const validateForm = () => {
    const newErrors = { name: "", login: "", password: "" };
    let isValid = true;

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      setError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку."
      );
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
      setError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку."
      );
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      setError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
      );
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // функция, которая отслеживает в полях изменения
  // и меняет состояние компонента
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  // функция отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // если у нас форма не прошла валидацию, то дальше не продолжаем
      return;
    }
    try {
      // чтобы не писать две разных функции, выберем нужный запрос через
      // тернарный оператор
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        updateUserInfo(data);
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Bg>
      <Modal>
        <FWrapper>
          <FTitle>{isSignUp ? "Регистрация" : "Вход"}</FTitle>
          <Form id="form" onSubmit={handleSubmit}>
            <InputWrapper>
              {isSignUp && (
                <Input
                  error={errors.name}
                  type="text"
                  name="name"
                  id="formname"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                />
              )}
              <Input
                error={errors.login}
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={formData.login}
                onChange={handleChange}
              />
              <Input
                error={errors.password}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
              />
            </InputWrapper>
            <ErrorP>{error}</ErrorP>
            <BaseButton
              onClick={handleSubmit}
              type="submit"
              disabled={error}
              text={isSignUp ? "Зарегистрироваться" : "Войти"}
            />
            {!isSignUp && (
              <FormGroupP>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/sign-up">
                  <FormGroupPLink>Регистрируйтесь здесь</FormGroupPLink>
                </Link>
              </FormGroupP>
            )}
            {isSignUp && (
              <FormGroupP>
                <p>Уже есть аккаунт?</p>
                <Link to="/sign-in">
                  <FormGroupPLink>Войдите здесь</FormGroupPLink>
                </Link>
              </FormGroupP>
            )}
          </Form>
        </FWrapper>
      </Modal>
    </Bg>
  );
};

export default AuthForm;