import React from "react";
import axios from "axios";
import { useState } from "react";
import cogoToast from "cogo-toast";
import "../../style/Modal.css";

const ModificarDatos = (props) => {
  const token = props.token;
  const dato = props.listaDato;
  const setClose = props.toggleModificarDatos;
  const handleModal = () => {
    setClose();
  };
  const [nuevoCuidad, setNuevoCuidad] = useState(dato.cuidad);
  const [nuevoDireccion, setNuevoDireccion] = useState(dato.direccion);
  const [nuevoProvincia, setNuevoProvincia] = useState(dato.provincia);
  const [nuevoRegion, setNuevoRegion] = useState(dato.region);
  const [nuevoTelefono, setNuevoTelefono] = useState(dato.telefono);
  const [nuevoCp, setNuevoCp] = useState(dato.cp);

  const handleNuevoCuidad = (e) => {
    setNuevoCuidad(e.target.value);
  };
  const handleNuevoDireccion = (e) => {
    setNuevoDireccion(e.target.value);
  };
  const handleNuevoProvincia = (e) => {
    setNuevoProvincia(e.target.value);
  };
  const handleNuevoRegion = (e) => {
    setNuevoRegion(e.target.value);
  };
  const handleNuevoTelefono = (e) => {
    setNuevoTelefono(e.target.value);
  };
  const handleNuevoCp = (e) => {
    setNuevoCp(e.target.value);
  };

  const handleModificarDato = async (e) => {
    e.preventDefault();
    try {
      const request = await axios.patch(
        process.env.REACT_APP_BACKEND_URL + `/api/datos/${dato._id}`,
        {
          region: nuevoRegion,
          direccion: nuevoDireccion,
          provincia: nuevoProvincia,
          cuidad: nuevoCuidad,
          telefono: nuevoTelefono,
          cp: nuevoCp,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      const datos = request.data;
      console.log(datos);
      setClose();
      cogoToast.success("Se han modificado correctamente los datos.");
    } catch (error) {
      console.log("error" + error);
    }
  };
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="form-container">
        <form
          action=""
          className="formulario-contacto"
          onSubmit={handleModificarDato}
        >
          <input
            type="text"
            name="region"
            placeholder="Region"
            className="form"
            value={nuevoRegion}
            onChange={handleNuevoRegion}
            required
          />
          <br />
          <input
            type="text"
            name="direccion"
            placeholder="Direccion"
            className="form"
            value={nuevoDireccion}
            onChange={handleNuevoDireccion}
            required
          />
          <br />
          <input
            type="text"
            name="provincia"
            placeholder="Provincia"
            className="form"
            value={nuevoProvincia}
            onChange={handleNuevoProvincia}
            required
          />
          <br />
          <input
            type="text"
            name="cuidad"
            placeholder="Ciudad"
            className="form"
            value={nuevoCuidad}
            onChange={handleNuevoCuidad}
            required
          />
          <br />
          <div className="formulario-datos">
            <input
              type="number"
              name="telefono"
              placeholder="Telefono"
              className="form"
              value={nuevoTelefono}
              onChange={handleNuevoTelefono}
              required
            />
            <br />
            <input
              type="number"
              name="cp"
              placeholder="Codigo Postal"
              className="form"
              value={nuevoCp}
              onChange={handleNuevoCp}
              required
            />
          </div>
          <div className="btn-modificardatos">
            <button type="submit" className="btn-form">
              Modificar
            </button>
            <button className="btn-form" onClick={handleModal}>
              Cerrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModificarDatos;
