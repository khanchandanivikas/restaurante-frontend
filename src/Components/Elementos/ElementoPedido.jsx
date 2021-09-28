import React from "react";

const ElementoPedido = (props) => {
  const producto = props.elemento;
  return (
    <div>
      {producto.map((element) => {
        return (
          <div id="datos-container">
          <div id="datos-wrapper">
          <p className="parrafo"><strong>Nombre del plato:</strong> {element.nombre}</p>
          <p className="parrafo"><strong>Categoría:</strong> {element.categoria}</p>
          <p className="parrafo"><strong>Descripción:</strong> {element.descripcion}</p>
          <p className="parrafo"><strong>Cantidad:</strong> {element.cantidad}</p>
          <p className="parrafo"><strong>Precio:</strong> {element.precio} €</p>
          </div>
        </div>
        );
      })}
    </div>
  );
};

export default ElementoPedido;
