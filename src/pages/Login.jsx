import React from "react";
import LoginSignup from "../Components/LoginSignup";

const Login = (props) => {
  const accesoGestionar = props.gestionarAcceso;
  return (
    <div>
      <LoginSignup
        accesoGestionar={accesoGestionar}
      />
    </div>
  );
};

export default Login;
