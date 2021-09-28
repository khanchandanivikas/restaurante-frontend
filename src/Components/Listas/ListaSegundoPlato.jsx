import React from "react";
import ElementoSegundoPlato from "../Elementos/ElementoSegundoPlato";
import "./../../style/ListaCarta.css";

const ListaSegundoPlato = (props) => {
  const listaSegundoPlatos = props.segundoPlatos;
  const handleAddProduct = props.handleAddProduct;

  return (
    <div className="carta">
      <h1 className="heading-carta">Segundo Platos</h1>
      <div className="platos-container">
        {listaSegundoPlatos.map((elemento) => {
          return (
            <ElementoSegundoPlato
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

export default ListaSegundoPlato;
