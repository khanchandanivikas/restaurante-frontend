import React from "react";
import ListaCarrito from "../Components/Listas/ListaCarrito";
import Tarjeta from "../Components/Tarjeta";
import "../style/Checkout.css";

const Checkout = (props) => {
  const itemsCart = props.cartItems;
  const handleAddProduct = props.handleAddProduct;
  const handleRemoveProduct = props.handleRemoveProduct;
  const handleCartClearance = props.handleCartClearance;
  const handleCheckout = props.handleCheckout;

  return (
    <div style={{ marginTop: "5.4rem" }}>
      <div style={{ marginTop: "5.4rem" }}>
        <h1
          style={{ marginTop: "5.4rem", textAlign: "center" }}
          className="headings"
        >
          Checkout
        </h1>
        <div className="container-checkout">
          <ListaCarrito
            key={itemsCart._id}
            itemsCart={itemsCart}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartClearance={handleCartClearance}
            handleCheckout={handleCheckout}
          />
          <Tarjeta />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
