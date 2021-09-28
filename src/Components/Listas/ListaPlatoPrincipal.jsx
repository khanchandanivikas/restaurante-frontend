import React from "react";
import ElementoPlatoPrincipal from "../Elementos/ElementoPlatoPrincipal";
import "./../../style/ListaCarta.css";

const ListaPlatoPrincipal = (props) => {
  const listaPlatosPrincipales = props.platosPrincipales;
  const handleAddProduct = props.handleAddProduct;

  return (
    <div className="carta">
      <h1 className="heading-carta">Platos Principales</h1>
      <div className="platos-container">
        {listaPlatosPrincipales.map((elemento) => {
          return (
            <ElementoPlatoPrincipal
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

export default ListaPlatoPrincipal;
