import React from "react";
import BienvenidoContacto from "../Components/Intros/BienvenidoContacto";
import FondoFormContacto from '../Components/FondoFormContacto';
import Direccion from '../Components/Direccion';

const Contacto = () => {
  return (
    <div>
      <BienvenidoContacto />
      <FondoFormContacto />
      <Direccion />
    </div>
  );
};

export default Contacto;
