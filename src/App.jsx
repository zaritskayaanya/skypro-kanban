import "./App.css";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import AuthProvider from "./context/AuthProvider";
import { TasksProvider } from "./context/TasksProvider";
import GlobalStyle from "./GlobalStyles/GlobalStyles.styled";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <GlobalStyle />
        <AppRoutes />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;