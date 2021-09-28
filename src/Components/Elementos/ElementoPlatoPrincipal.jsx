import React from 'react'

const ElementoPlatoPrincipal = (props) => {
  const platoPrincipal = props.elemento;
  const handleAddProduct = props.handleAddProduct;

    return (
        <div className="plato-card">
        <div className="plato-imagen-container">
          <img src={platoPrincipal.imagen} alt="carta" className="plato-imagen" />
        </div>
        <button onClick={() =>handleAddProduct(platoPrincipal)} className="btn-carta">add to cart</button>
        <h1 className="heading-plato">{platoPrincipal.nombre}</h1>
        <p className="parrafo">{platoPrincipal.descripcion}</p>
        <h4>{platoPrincipal.precio} €</h4>
      </div>
    )
}

export default ElementoPlatoPrincipal
