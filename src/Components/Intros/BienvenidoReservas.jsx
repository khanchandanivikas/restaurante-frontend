import React from "react";
import './../../style/Bienvenido.css';
import bienvenidoImagenReservas from './../../images/bienvenidoImagenReservas.jpg';

const BienvenidoReservas = () => {
  return (
    <div className="bg-imagen" style={{backgroundImage: `url(${bienvenidoImagenReservas})`}}>
      <h1 className="bienvenido">RESERVAS</h1>
    </div>
  );
};

export default BienvenidoReservas;
