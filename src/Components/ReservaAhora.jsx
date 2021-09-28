import React from "react";
import { Link } from "react-router-dom";
import "../style/ReservaAhora.css";
import book from "../images/book.jpg";

const ReservaAhora = () => {
  return (
    <div className="container-book" style={{ backgroundImage: `url(${book})` }}>
      <h1 className="heading-book">¡RESERVA TU MESA AHORA!</h1>
      <Link to="/reserva">
        <button style={{ zIndex: "1" }} className="btn-form">
          <p className="btn-parrafo">RESERVA</p>
        </button>
      </Link>
    </div>
  );
};

export default ReservaAhora;
