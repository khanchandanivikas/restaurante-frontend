import React from "react";
import { Link } from "react-router-dom";
import "../style/Hamburger.css";

const Hamburg = (props) => {
  const token = props.token;
  const showHideHamburger = props.toggleHamburger;
  const hamburgerState = props.hamburger;
  return (
    <div className={hamburgerState ? "hamburger-menu" : "hamburger-menu-hide"}>
      <div className="hamburger-list">
        <Link to="/" className="vinculo-hamburger" onClick={showHideHamburger}>
          INICIO
        </Link>
        <Link
          to="/carta"
          className="vinculo-hamburger"
          onClick={showHideHamburger}
        >
          CARTA
        </Link>
        <Link
          to="/blog"
          className="vinculo-hamburger"
          onClick={showHideHamburger}
        >
          BLOG
        </Link>
        <Link
          to="/reserva"
          className="vinculo-hamburger"
          onClick={showHideHamburger}
        >
          RESERVAS
        </Link>
        <Link
          to="/contacto"
          className="vinculo-hamburger"
          onClick={showHideHamburger}
        >
          CONTACTO
        </Link>
        {token ? (
          <Link
            className="vinculo-hamburger"
            to="/personal"
            onClick={showHideHamburger}
          >
            DATOS
          </Link>
        ) : (
          <Link
            className="vinculo-hamburger"
            to="/login"
            onClick={showHideHamburger}
          >
            CUENTA
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hamburg;
