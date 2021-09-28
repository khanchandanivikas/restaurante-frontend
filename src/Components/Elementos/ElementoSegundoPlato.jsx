import React from "react";

const ElementoSegundoPlato = (props) => {
  const segundoPlato = props.elemento;
  const handleAddProduct = props.handleAddProduct;

  return (
    <div className="plato-card">
      <div className="plato-imagen-container">
        <img src={segundoPlato.imagen} alt="carta" className="plato-imagen" />
      </div>
      <button onClick={() => handleAddProduct(segundoPlato)} className="btn-carta">
        add to cart
      </button>
      <h1 className="heading-plato">{segundoPlato.nombre}</h1>
      <p className="parrafo">{segundoPlato.descripcion}</p>
      <h4>{segundoPlato.precio} €</h4>
    </div>
  );
};

export default ElementoSegundoPlato;
