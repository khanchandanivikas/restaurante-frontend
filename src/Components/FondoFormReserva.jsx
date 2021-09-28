import React from "react";
import ReservaForm from "./Formularios/ReservaForm";
import "../style/FondoForm.css";
import picoArriba from '../images/picoArriba.png';
import picoAbajo from '../images/picoAbajo.png';

const FondoFormReserva = () => {
  return (
    <div>
      <div className="pico">
        <img src={picoArriba} alt="pico" className="picoimagen" />
      </div>
      <section className="formulario">
        <ReservaForm />
        <div className="pico2">
          <img src={picoAbajo} alt="movil" className="picoimagen" />
        </div>
      </section>
    </div>
  );
};

export default FondoFormReserva;
