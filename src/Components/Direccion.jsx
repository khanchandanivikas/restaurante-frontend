import React from "react";
import "../style/Direccion.css";

const Direccion = () => {
  return (
    <div>
      <div className="horario-container">
        <div className="horario-wrapper">
          <h1 className="headings">Horario</h1>
          <div className="horas">
            <p className="hora">Lunes a Viernes :</p>
            <p className="hora">12:00pm - 11:00pm</p>
            <p className="hora">Sábado a Domingo :</p>
            <p className="hora">11:00am - 11:00pm</p>
          </div>
          <p className="hora">Abierto todos los días</p>
        </div>
      </div>
      <div className="direccion">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4611.5779138907865!2d-15.584064260166974!3d27.765731394868045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc3f62b093609e0f%3A0x32a5e5f8462f36fa!2sParaiso%20Maspalomas!5e0!3m2!1ses!2ses!4v1624119806070!5m2!1ses!2ses"
            max-width="500px"
            min-width="350px"
            height="300px"
            style={{ border: "0" }}
            loading="lazy"
            title="map"
          ></iframe>
        </div>
        <div>
          <h1 className="headings">Dirección</h1>
          <p className="hora">
            <i className="fas fa-map-marker-alt"></i> 125, Avenida de Gran
            Canaria, Las Palmas De Gran Canaria
          </p>
          <p className="hora">
            <i className="fas fa-phone-alt"></i> Teléfono: (988) 557 666
          </p>
          <p className="hora">
            <i className="fas fa-envelope"></i> banderas@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Direccion;
