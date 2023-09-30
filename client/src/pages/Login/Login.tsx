import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";



function Login() {
  const [message, setMessage] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();
  
  const attemptLogin = async () => {
    try {
      const mail = document.getElementById("email")
      const m = mail.value
      console.log(m)
      const pass = document.getElementById("password")
      const userPassword = pass.value;
      const message = await login(m, userPassword);
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>
        <input type="email" id="email" placeholder = "Email"/><br/>
        <input type="password" id="password" placeholder="Password"/><br/>
        <button onClick={() => attemptLogin()}>
          Login (as user set in code)
        </button>
        {message && <p>{message}</p>}
      </div>
    </Page>
  );
}

export default Login;