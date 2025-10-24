import "../../App.css";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import NewCardPage from "../../pages/NewCardPage";
import ExitPage from "../../pages/ExitPage";
import MainPage from "../../pages/MainPage";
import CardPage from "../../pages/CardPage";
import AuthForm from "../AuthForm/AuthForm";

function AppRoutes() {
  return (
    <Routes>
      {/* Защищённые маршруты - доступны только авторизованным пользователям */}
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/card/add" element={<NewCardPage />} />
        <Route path="/card/:_id" element={<CardPage />} />
        <Route path="/exit" element={<ExitPage />} />
      </Route>

      {/* Публичные маршруты - аутентификация */}
      <Route
        path="/sign-in"
        element={<AuthForm isSignUp={false} />}
      />
      <Route
        path="/sign-up"
        element={<AuthForm isSignUp={true} />}
      />

      {/* 404 страница - должна быть в конце */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;