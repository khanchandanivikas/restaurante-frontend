import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import ModificarDatos from "../Formularios/ModificarDatos";

const ElementoDato = (props) => {
  const token = props.token;
  const handleEliminar = props.handleEliminar;
  const listaDato = props.dato;
  const [modalDatosModificar, setModalDatosModificar] = useState(false);

  const toggleModificarDatos = () => {
    setModalDatosModificar(!modalDatosModificar);
  };

  let history = useHistory();

  const gestionarEliminar = () => {
    swal({
      title: "¿Estas seguro de que quieres eliminar tu cuenta?",
      text: "Todos los datos asociados a tu cuenta seran eliminados y no podrás recuperarlos",
      icon: "warning",
      buttons: ["Cancelar", "OK"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("¡Cuenta eliminada! ¡Tu cuenta ha sido eliminada correctamente!", {
          icon: "success",
        });
        handleEliminar();
        history.push("/");
      } else {
        swal("¡No se han hecho cambios en la cuenta!");
      }
    });
  };

  return (
    <div style={{ padding: "1rem" }}>
      <p className="parrafo"><strong>Ciudad:</strong> {listaDato.cuidad}</p>
      <p className="parrafo"><strong>Dirección:</strong> {listaDato.direccion}</p>
      <p className="parrafo"><strong>Provincia:</strong> {listaDato.provincia}</p>
      <p className="parrafo"><strong>Región:</strong> {listaDato.region}</p>
      <p className="parrafo"><strong>Teléfono:</strong> {listaDato.telefono}</p>
      <p className="parrafo"><strong>Código Postal:</strong> {listaDato.cp}</p>
      <div>
        <button
          style={{ width: "50px", borderRadius: "50%" }}
          className="btn-form"
          onClick={toggleModificarDatos}
        >
          <i className="fas fa-user-edit"></i>
        </button>
        <button
          style={{ width: "50px", borderRadius: "50%" }}
          onClick={gestionarEliminar}
          className="btn-form"
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
      {modalDatosModificar ? (
        <ModificarDatos
          listaDato={listaDato}
          toggleModificarDatos={toggleModificarDatos}
          token={token}
        />
      ) : null}
    </div>
  );
};

export default ElementoDato;
