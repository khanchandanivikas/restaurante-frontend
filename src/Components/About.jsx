import React from "react";
import "../style/About.css";
import sobre from "../images/sobre.png";

const About = () => {
  return (
    <section className="about-restaurante">
      <img
        src={sobre}
        alt="imagen del about restaurante"
        className="imagen-about"
      />
      <div className="texto-about">
        <h1 className="headings">Quiénes Somos</h1>
        <p className="parrafo">
          Bienvenido a Banderas Gourmet & Bar, donde ofrecemos una experiencia
          gastronómica única con el sabor único de la cocina del suroeste. Ya
          sea que esté aquí para un almuerzo o cena de negocios, celebrando una
          ocasión especial o buscando un ambiente romántico para una cita,
          nuestro menú ofrece algo para todos. Nos esforzamos constantemente
          para encontrar nuevas formas de redefinir la experiencia gastronómica
          y estamos adoptando de todo corazón pequeños platos para compartir y
          carnes grandes para compartir, con pasta casera y todas las ostras e
          ingredientes crudos de barra que podemos encontrar.
        </p>
      </div>
    </section>
  );
};

export default About;
