import React from "react";
import "../style/Chef.css";
import signature from "../images/signature.png";
import chef from "../images/chef.png";

const Chef = () => {
  return (
    <section className="container-chef">
      <div className="container-chef-mensage">
        <h1 className="headings">Nuestro Chef</h1>
        <p className="parrafo">
          Desde 2021, me ha encantado tener la oportunidad de servir excelente
          comida a nuestros maravillosos comensales en Banderas Gourmet & Bar.
          Gracias a todos por el privilegio de albergar sus cenas de empresa,
          celebraciones de cumpleaños y fiestas de bodas. Nos honra que haya
          elegido pasar tiempo con nosotros. Siempre trabajaremos para ganarnos
          ese privilegio.
        </p>
        <img src={signature} alt="imagen de firma" className="chef-firma" />
      </div>
      <div className="container-chef-imagen">
        <img src={chef} alt="imagen del chef" className="chef-imagen" />
      </div>
    </section>
  );
};

export default Chef;
