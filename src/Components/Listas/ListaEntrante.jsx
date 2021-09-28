import React from "react";
import ElementoEntrante from "../Elementos/ElementoEntrante";
import "./../../style/ListaCarta.css";

const ListaEntrante = (props) => {
  const listaEntrantes = props.entrantes;
  const handleAddProduct = props.handleAddProduct;

  return (
    <div className="carta">
      <h1 className="heading-carta">Entrantes</h1>
      <div className="platos-container">
        {listaEntrantes &&
          listaEntrantes.map((elemento) => {
            return (
              <ElementoEntrante
                key={elemento._id}
                elemento={elemento}
                handleAddProduct={handleAddProduct}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ListaEntrante;
