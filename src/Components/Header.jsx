import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import "../style/Header.css";
import logo from "../images/logo.png";
import Hamburg from "./Hamburg";

const Header = (props) => {
  const token = props.token;
  const [hamburger, setHamburger] = useState(false);
  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <header>
      <Link className="vinculo-header" to="/">
        INICIO
      </Link>
      <Link className="vinculo-header" to="/carta">
        CARTA
      </Link>
      <Link className="vinculo-header" to="/blog">
        BLOG
      </Link>
      <Link to="/">
        <img src={logo} alt="logo del restaurante" className="logo" />
      </Link>
      <Link className="vinculo-header" to="/reserva">
        RESERVAS
      </Link>
      <Link className="vinculo-header" to="/contacto">
        CONTACTO
      </Link>
      {token ? (
        <Link className="vinculo-header" to="/personal">
          CUENTA
        </Link>
      ) : (
        <Link className="vinculo-header" to="/login">
          LOGIN
        </Link>
      )}
      <div className="bars" onClick={toggleHamburger}>
        <Hamburger toggled={hamburger} />
      </div>
      <Hamburg
        token={token}
        hamburger={hamburger}
        toggleHamburger={toggleHamburger}
      />
    </header>
  );
};

export default Header;
