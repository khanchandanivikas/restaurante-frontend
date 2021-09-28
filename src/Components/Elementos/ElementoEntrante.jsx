import React from "react";

const ElementoEntrante = (props) => {
  const entrante = props.elemento;
  const handleAddProduct = props.handleAddProduct;

  return (
    <div className="plato-card">
      <div className="plato-imagen-container">
        <img src={entrante.imagen} alt="carta" className="plato-imagen" />
      </div>
      <button onClick={() => handleAddProduct(entrante)} className="btn-carta">add to cart</button>
      <h1 className="heading-plato">{entrante.nombre}</h1>
      <p className="parrafo">{entrante.descripcion}</p>
      <h4>{entrante.precio} €</h4>
    </div>
  );
};

export default ElementoEntrante;
