import React from "react";
import './../../style/Bienvenido.css';
import bienvenidoImagenInicio from './../../images/bienvenidoImagenInicio.jpg';

const BienvenidoInicio = () => {
  return (
    <div className="bg-imagen" style={{backgroundImage: `url(${bienvenidoImagenInicio})`}}>
      <h1 className="bienvenido">BIENVENIDOS</h1>
    </div>
  );
};

export default BienvenidoInicio;
