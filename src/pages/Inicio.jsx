import React from "react";
import BienvenidoInicio from "../Components/Intros/BienvenidoInicio";
import About from "../Components/About";
import Galeria from "../Components/Galeria";
import ReservaAhora from "../Components/ReservaAhora";
import Chef from "../Components/Chef";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Inicio = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  
  return (
    <div>
      <BienvenidoInicio />
      <div data-aos="fade-up">
        <About />
      </div>
      <Galeria />
      <ReservaAhora />
      <Chef />
    </div>
  );
};

export default Inicio;
