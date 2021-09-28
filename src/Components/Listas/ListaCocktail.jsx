import React from "react";
import ElementoCocktail from "../Elementos/ElementoCocktail";
import "./../../style/ListaCarta.css";

const ListaCocktail = (props) => {
  const listaCocktails = props.cocktails;
  const handleAddProduct = props.handleAddProduct;
  
  return (
    <div className="carta">
      <h1 className="heading-carta">Cocktails</h1>
      <div className="platos-container">
        {listaCocktails.map((elemento) => {
          return (
            <ElementoCocktail
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

export default ListaCocktail;
