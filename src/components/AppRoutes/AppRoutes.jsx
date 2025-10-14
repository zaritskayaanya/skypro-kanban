import "../../App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import NotFoundPage from "../../pages/NotFoundPage";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import NewCardPage from "../../pages/NewCardPage";
import ExitPage from "../../pages/ExitPage";
import MainPage from "../../pages/MainPage";
import CardPage from "../../pages/CardPage";
import AuthForm from "../AuthForm/AuthForm";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage />}>
          <Route path="/card/add" element={<NewCardPage />} />
          <Route path="/card/:_id" element={<CardPage />} />
          <Route path="/exit" element={<ExitPage setIsAuth={setIsAuth} />} />
        </Route>
      </Route>
      <Route
        path="/sign-in"
        element={<AuthForm isSignUp={false} setIsAuth={setIsAuth} />}
      />
      <Route
        path="/sign-up"
        element={<AuthForm isSignUp={true} setIsAuth={setIsAuth} />}
      />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;