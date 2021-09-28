import React from "react";
import "../style/Footer.css";
import tarjetas from "../images/payments.png";
import Newsletter from "./Formularios/Newsletter";

const Footer = () => {
  return (
    <footer>
      <div className="footer-info-container">
        <div>
          <h3 className="heading-footer">CONTACTO</h3>
          <p className="footer-parrafo">125, Avenida de gran canaria,</p>
          <p className="footer-parrafo">Las Palmas De Gran Canaria</p>
          <p className="footer-parrafo">banderas@gmail.com</p>
        </div>
        <div>
          <h3 className="heading-footer">HORARIO</h3>
          <p className="footer-parrafo">Lunes a Viernes :</p>
          <p className="footer-parrafo">12:00pm - 11:00pm</p>
          <p className="footer-parrafo">Sábado a Domingo :</p>
          <p className="footer-parrafo">11:00am - 11:00pm</p>
        </div>
        <div>
          <h3 className="heading-footer">LLÁMANOS</h3>
          <p className="footer-parrafo">(988) 557 666</p>
          <h3 className="heading-footer">SÍGUENOS</h3>
          <a className="social" href="/">
            <i className="fab fa-facebook"></i>
          </a>
          <a className="social" href="/">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="social" href="/">
            <i className="fab fa-twitter-square"></i>
          </a>
          <a className="social" href="/">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
        <div>
          <h3 className="heading-footer">NEWSLETTER</h3>
          <Newsletter />
        </div>
      </div>
      <div className="tarjetas">
        <img
          className="imagenes-tarjetas"
          src={tarjetas}
          alt="imagenes de tarjetas"
        />
        <p className="copyright">
          <i className="far fa-copyright"></i> 2021 Banderas - All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
