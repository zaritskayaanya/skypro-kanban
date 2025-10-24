import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function PrivateRoute() {
  const { user } = useContext(AuthContext);

  // Если пользователь не авторизован, перенаправляем на страницу входа
  if (!user || !user.token) {
    return <Navigate to="/sign-in" replace />;
  }

  // Если авторизован, показываем защищённые маршруты
  return <Outlet />;
}

export default PrivateRoute;