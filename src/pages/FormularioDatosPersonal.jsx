import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

const FormularioDatosPersonal = (props) => {
  const datos = props.datos;
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/api/datos/",
        {
          region: data.region,
          direccion: data.direccion,
          provincia: data.provincia,
          cuidad: data.cuidad,
          cp: data.cp,
          telefono: data.telefono,
          usuario: `${datos.userId}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + datos.token,
          },
        }
      )
      .then(() => {
        // console.log("dato creado");
        // console.log(response);
        history.push("/personal");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <section
      className="formulario"
      style={{ marginTop: "5.4rem", paddingBottom: "5.4rem" }}
    >
      <div>
        <form
          action=""
          className="formulario-contacto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="headings">Datos</h1>
          <input
            type="text"
            name="region"
            placeholder="Region"
            className="form"
            {...register("region", { required: true })}
          />
          {errors.region && errors.region.type === "required" && (
            <span>Se requiere region</span>
          )}
          <br />
          <input
            type="text"
            name="direccion"
            placeholder="Direccion"
            className="form"
            {...register("direccion", { required: true })}
          />
          {errors.direccion && errors.direccion.type === "required" && (
            <span>Se requiere direccion</span>
          )}
          <br />
          <input
            type="text"
            name="provincia"
            placeholder="Provincia"
            className="form"
            {...register("provincia", { required: true })}
          />
          {errors.provincia && errors.provincia.type === "required" && (
            <span>Se requiere provincia</span>
          )}
          <br />
          <input
            type="text"
            name="cuidad"
            placeholder="Cuidad"
            className="form"
            {...register("cuidad", { required: true })}
          />
          {errors.cuidad && errors.cuidad.type === "required" && (
            <span>Se requiere cuidad</span>
          )}
          <br />
          <div className="formulario-datos">
            <input
              type="number"
              name="telefono"
              placeholder="Telefono"
              className="form"
              {...register("telefono", { required: true })}
            />
            {errors.telefono && errors.telefono.type === "required" && (
              <span>Se requiere telefono</span>
            )}
            <br />
            <input
              type="number"
              name="cp"
              placeholder="Codigo Postal"
              className="form"
              {...register("cp", { required: true })}
            />
            {errors.cp && errors.cp.type === "required" && (
              <span>Se requiere cp</span>
            )}
          </div>
          <button type="submit" className="btn-form">
            <p className="btn-parrafo">ENVIAR</p>
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormularioDatosPersonal;
