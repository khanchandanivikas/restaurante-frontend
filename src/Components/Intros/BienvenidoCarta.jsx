import React from "react";
import "./../../style/Bienvenido.css";
import bienvenidoImagenCarta from "./../../images/bienvenidoImagenCarta.jpg";

const BienvenidoCarta = () => {
  return (
    <div>
      <div
        className="bg-imagen"
        style={{ backgroundImage: `url(${bienvenidoImagenCarta})` }}
      >
        <h1 className="bienvenido">CARTA</h1>
      </div>
    </div>
  );
};

export default BienvenidoCarta;
