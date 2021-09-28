import React from "react";

const ElementoPostre = (props) => {
  const postre = props.elemento;
  const handleAddProduct = props.handleAddProduct;

  return (
    <div className="plato-card">
      <div className="plato-imagen-container">
        <img src={postre.imagen} alt="carta" className="plato-imagen" />
      </div>
      <button onClick={() => handleAddProduct(postre)} className="btn-carta">
        add to cart
      </button>
      <h1 className="heading-plato">{postre.nombre}</h1>
      <p className="parrafo">{postre.descripcion}</p>
      <h4>{postre.precio} €</h4>
    </div>
  );
};

export default ElementoPostre;
