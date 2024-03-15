import { useEffect } from "react";
import Header from "../../components/Header";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    let currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Header />
      <LoginForm />
    </>
  );
}

export default Login;
