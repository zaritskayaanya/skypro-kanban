import "../../App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import NotFoundPage from "../../pages/NotFoundPage";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import NewCardPage from "../../pages/NewCardPage";
import ExitPage from "../../pages/ExitPage";
import LoginPage from "../../pages/LoginPage";
import RegistrPage from "../../pages/RegistrPage";
import MainPage from "../../pages/MainPage";
import AuthForm from "../AuthForm/AuthRorm";
import CardPage from "../../pages/CardPage";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage />}>
          <Route path="/card/add" element={<NewCardPage />} />
          <Route path="/card/:id" element={<CardPage />} />
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