import React from "react";
import ElementoDato from "../Elementos/ElementoDato";

const ListaDatos = (props) => {
  const token = props.token;
  const handleEliminar = props.handleEliminar;
  const listaDatos = props.datos;
  return (
    <div>
      {listaDatos.map((dato) => {
        return (
          <ElementoDato
            key={dato._id}
            dato={dato}
            token={token}
            handleEliminar={handleEliminar}
          />
        );
      })}
    </div>
  );
};

export default ListaDatos;
