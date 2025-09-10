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

const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };
  return (
    <Bg>
      <Modal>
        <FWrapper>
          <FTitle>{isSignUp ? "Регистрация" : "Вход"}</FTitle>
          <Form id="form" onSubmit={handleLogin}>
            <InputWrapper>
              {isSignUp && (
                <Input
                  tag="input"
                  type="text"
                  name="name"
                  id="formname"
                  placeholder="Имя"
                  autoСomplete="name"
                />
              )}
              <Input
                tag="input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                autoСomplete="email"
              />
              <Input
                tag="input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                autoСomplete="current-password"
              />
            </InputWrapper>

            <BaseButton
              onClick={handleLogin}
              type="submit"
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
                <p>
                  Уже есть аккаунт?{" "}
                  <Link to="/sign-in">
                    <FormGroupPLink>Войдите здесь</FormGroupPLink>
                  </Link>
                </p>
              </FormGroupP>
            )}
          </Form>
        </FWrapper>
      </Modal>
    </Bg>
  );
};

export default AuthForm;
