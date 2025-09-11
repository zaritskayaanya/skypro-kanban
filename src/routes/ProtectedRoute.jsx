import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  console.log('ProtectedRoute: user=', user, 'location=', location);

  if (!user) {
    // можно передать from, чтобы после логина вернуть пользователя
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children ?? null;
}
