import "./App.css";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import AuthProvider from "./context/AuthProvider";
import GlobalStyle from "./GlobalStyles/GlobalStyles.styled";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <AppRoutes />;
    </AuthProvider>
  );
}
export default App;