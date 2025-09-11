import "./App.css";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import GlobalStyle from "./GlobalStyles/GlobalStyles.styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />;
    </>
  );
}
export default App;
