import React from "react";
import { useForm } from "react-hook-form";
import cogoToast from "cogo-toast";
import swal from "sweetalert";
import axios from "axios";

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/newsletter", {
        email: data.email,
      })
      .then((response) => {
        cogoToast.success("Ha sido suscrito a nuestro boletín informativo");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        swal(
          "Error",
          "¡Ya existe un usuario suscrito con este correo electrónico!",
          "error"
        );
      });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="newsletter"
          id="newsletter"
          placeholder="Su correo-electronico"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && errors.email.type === "required" && (
          <span>Se requiere e-mail</span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span>Se requiere e-mail válido</span>
        )}
        <br />
        <button type="submit" id="enviar" className="btn-form">
          SUSCRIBIRSE
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
