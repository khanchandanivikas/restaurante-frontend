import React from "react";
import ElementoCarrito from "../Elementos/ElementoCarrito";

const ListaCarrito = (props) => {
  const cartItems = props.itemsCart;
  const handleAddProduct = props.handleAddProduct;
  const handleRemoveProduct = props.handleRemoveProduct;
  const handleCartClearance = props.handleCartClearance;
  const handleCheckout = props.handleCheckout;

  const precioTotal = cartItems.reduce(
    (precio, elemento) => precio + elemento.cantidad * elemento.precio,
    0
  );

  return (
    <div>
      <table>
        <tbody>
          {cartItems.map((elemento) => {
            return (
              <ElementoCarrito
                key={elemento._id}
                elemento={elemento}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
              />
            );
          })}
        </tbody>
      </table>
      <p className="parrafo"><strong>Precio Total:</strong> {precioTotal} €</p>
      <button className="btn-form" onClick={handleCartClearance}>
        Vaciar Carrito
      </button>
      <button className="btn-form" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default ListaCarrito;
