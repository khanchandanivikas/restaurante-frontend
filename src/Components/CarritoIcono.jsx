import React from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";
// css en header

const CarritoIcono = (props) => {
  const cartItems = props.cartItems;
  return (
    <div className="carrito">
      <Link to="/checkout">
        <i className="fas fa-shopping-bag"></i>
        <span className="carrito-length">{cartItems.length}</span>
      </Link>
    </div>
  );
};

export default CarritoIcono;
