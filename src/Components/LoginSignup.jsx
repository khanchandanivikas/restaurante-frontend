import React from "react";
import { useState } from "react";
import "../style/LoginSignup.css";
import LoginForm from "../Components/Formularios/LoginForm";
import SignUpForm from "../Components/Formularios/SignUpForm";
import loginFondo from "../images/loginFondo.jpg";
// import login_background from "../images/login_background.png";

const LoginSignup = (props) => {
  const gestionarAcceso = props.accesoGestionar;
  // const recuperarDatosPersonalesPorIdUsuario =
  //   props.recuperarDatosPersonalesPorUsuarioId;

  const [loginActive, setLoginActive] = useState(true);
  const [signupActive, setSignupActive] = useState(false);
  const handleLoginClick = () => {
    setLoginActive(true);
    setSignupActive(false);
  };
  const handleSignupClick = () => {
    setLoginActive(false);
    setSignupActive(true);
  };

  return (
    <div
      className="bg-imagen-login"
      style={{ backgroundImage: `url(${loginFondo})` }}
    >
      <div className="wrapper-contenido">
        <h1 className="heading-login">Tu Cuenta</h1>
        <div className="butones-login">
          <button
            onClick={handleLoginClick}
            className={loginActive ? "login-btn-activo" : "login"}
          >
            Login
          </button>
          <button
            onClick={handleSignupClick}
            className={signupActive ? "signup-btn-activo" : "signup"}
          >
            Signup
          </button>
        </div>
        <div className="container-formularios">
          <div className="card">
            <div className={loginActive ? "front-active" : "front"}>
              <LoginForm
                gestionarAcceso={gestionarAcceso}
                // recuperarDatosPersonalesPorIdUsuario={
                //   recuperarDatosPersonalesPorIdUsuario
                // }
              />
            </div>
            <div className={signupActive ? "back-active" : "back"}>
              <SignUpForm gestionarAcceso={gestionarAcceso} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
