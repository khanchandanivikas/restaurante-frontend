import React from "react";

const ElementoCocktail = (props) => {
  const cocktail = props.elemento;
  const handleAddProduct = props.handleAddProduct;

  return (
    <div className="plato-card">
      <div className="plato-imagen-container">
        <img src={cocktail.imagen} alt="carta" className="plato-imagen" />
      </div>
      <button onClick={() => handleAddProduct(cocktail)} className="btn-carta">
        add to cart
      </button>
      <h1 className="heading-plato">{cocktail.nombre}</h1>
      <p className="parrafo">{cocktail.descripcion}</p>
      <h4>{cocktail.precio} €</h4>
    </div>
  );
};

export default ElementoCocktail;
