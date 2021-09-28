import React from "react";
import "../../style/Checkout.css";

const ElementoCarrito = (props) => {
  const cartItem = props.elemento;
  const handleAddProduct = props.handleAddProduct;
  const handleRemoveProduct = props.handleRemoveProduct;

  return (
    <tr>
      <td className="cart-titulo">
        <img className="imagen-cart" src={cartItem.imagen} alt="cart" />
        <span style={{ padding: "10px" }}>{cartItem.nombre}</span>
      </td>
      <td>{cartItem.descripcion}</td>
      <td style={{ width: "5rem" }}>
        <button className="btn-cart" onClick={() => handleAddProduct(cartItem)}>
          +
        </button>
        <span className="parrafo">
          <span className="cart-cantidad">{cartItem.cantidad}</span>
        </span>
        <button
          className="btn-cart"
          onClick={() => handleRemoveProduct(cartItem)}
        >
          -
        </button>
      </td>
      <td style={{ width: "3.5rem" }}>
        {cartItem.cantidad * cartItem.precio} €
      </td>
    </tr>
  );
};

export default ElementoCarrito;
