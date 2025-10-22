import AuthForm from "../AuthForm/AuthRorm";

const Login = ({ setIsAuth }) => {
  return <AuthForm setIsAuth={setIsAuth} isSignUp={false} />;
};

export default Login;