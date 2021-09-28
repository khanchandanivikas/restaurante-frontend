import React from "react";
import ElementoPostre from "../Elementos/ElementoPostre";
import "./../../style/ListaCarta.css";

const ListaPostre = (props) => {
  const listaPostres = props.postres;
  const handleAddProduct = props.handleAddProduct;

  return (
    <div className="carta">
      <h1 className="heading-carta">Postres</h1>
      <div className="platos-container">
        {listaPostres.map((elemento) => {
          return (
            <ElementoPostre
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

export default ListaPostre;
