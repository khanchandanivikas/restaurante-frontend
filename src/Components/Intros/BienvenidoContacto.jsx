import React from "react";
import './../../style/Bienvenido.css';
import bienvenidoImagenContacto from "./../../images/bienvenidoImagenContacto.jpeg";

const BienvenidoContacto = () => {
  return (
    <div className="bg-imagen" style={{backgroundImage: `url(${bienvenidoImagenContacto})`}}>
      <h1 className="bienvenido">CONTACTO</h1>
    </div>
  );
};

export default BienvenidoContacto;
