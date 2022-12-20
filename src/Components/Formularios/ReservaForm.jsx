import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import cogoToast from "cogo-toast";
import "./../../style/Formularios.css";
import butler from "./../../images/butler.png";

const ReservaForm = () => {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/reservas", {
        nombre: data.nombre,
        email: data.email,
        fecha: data.fecha,
        hora: data.hora,
        comensales: data.comensales,
      })
      .then(() => {
        // console.log("Reserva realizada");
        // console.log(response);
        history.push("/inicio");
        cogoToast.success("Se ha realizado la reserva");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formulario-contacto">
      <img className="reserva" src={butler} alt="reserva" />
      <h1 className="headings">Reserva Tu Mesa</h1>
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
        name="email"
        className="form"
        placeholder="Correo"
        {...register(
          "email",
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
        type="date"
        name="fecha"
        className="form"
        {...register("fecha", { required: true }, "Campo requerido")}
      />
      {errors.fecha && errors.fecha.type === "required" && (
        <span>Se requiere fecha</span>
      )}
      <br />
      <input
        type="time"
        name="hora"
        className="form"
        {...register("hora", { required: true }, "Campo requerido")}
      />
      {errors.hora && errors.hora.type === "required" && (
        <span>Se requiere hora</span>
      )}
      <br />
      <select
        name="comensales"
        className="opcion"
        {...register("comensales", { required: true }, "Campo requerido")}
      >
        <option value="1" defaultValue>
          1 persona
        </option>
        <option value="2">2 personas</option>
        <option value="3">3 personas</option>
        <option value="4">4 personas</option>
        <option value="5">5 personas y mas</option>
      </select>
      {errors.comensales && errors.comensales.type === "required" && (
        <span>Se requiere comensales</span>
      )}
      <button className="btn-form">
        <p className="btn-parrafo">ENVIAR</p>
      </button>
    </form>
  );
};

export default ReservaForm;
