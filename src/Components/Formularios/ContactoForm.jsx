import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import cogoToast from "cogo-toast";
import "./../../style/Formularios.css";
import telefono from "./../../images/telefono.png";

const ContactoForm = () => {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/contacto/", {
        tipo: data.tipo,
        genero: data.genero,
        nombre: data.nombre,
        correo: data.correo,
        mensaje: data.mensaje,
      })
      .then(() => {
        // console.log("contacto Correcto");
        // console.log(response);
        history.push("/inicio");
        cogoToast.success("Se ha enviado su mensaje");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="formulario-contacto">
        <img src={telefono} alt="movil" className="movil" />
        <h1 className="headings">Contáctanos</h1>
        <select
          name="tipo"
          className="opcion"
          {...register("tipo", { required: true }, "Campo requerido")}
        >
          <option value="general" defaultValue>
            General
          </option>
          <option value="eventos">Eventos</option>
        </select>
        {errors.tipo && errors.tipo.type === "required" && (
          <span>Se requiere tipo</span>
        )}
        <br />
        <select
          name="genero"
          className="opcion"
          {...register("genero", { required: true }, "Campo requerido")}
        >
          <option value="mr" defaultValue>
            Mr.
          </option>
          <option value="mrs">Mrs.</option>
          <option value="ms">Ms.</option>
        </select>
        {errors.genero && errors.genero.type === "required" && (
          <span>Se requiere genero</span>
        )}
        <br />
        <input
          type="text"
          name="nombre"
          className="form"
          placeholder="Nombre"
          {...register("nombre", { required: true }, "Campo requerido")}
        />
        {errors.nombre && errors.nombre.type === "required" && (
          <span>Se requiere nombre</span>
        )}
        <br />
        <input
          type="email"
          name="correo"
          className="form"
          placeholder="Correo"
          {...register(
            "correo",
            { required: true, pattern: /^\S+@\S+$/i },
            "Campo requerido"
          )}
        />
        {errors.email && errors.email.type === "required" && (
          <span>Se requiere e-mail</span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span>Se requiere e-mail válido</span>
        )}
        <br />
        <input
          type="text"
          name="mensaje"
          className="form"
          placeholder="Mensaje"
          {...register("mensaje", { required: true }, "Campo requerido")}
        />
        {errors.mensaje && errors.mensaje.type === "required" && (
          <span>Se requiere un mensaje</span>
        )}
        <button type="submit" className="btn-form">
          <p className="btn-parrafo">ENVIAR</p>
        </button>
      </form>
    </div>
  );
};

export default ContactoForm;
