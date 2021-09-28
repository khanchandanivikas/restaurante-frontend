import React from "react";
import ElementoPedido from "../Elementos/ElementoPedido";

const ListaPedidos = (props) => {
  const listaPedidos = props.pedidos;
  return (
    <div>
      {listaPedidos.map((pedido) => {
        return (
          <div style={{ padding: "1rem" }}>
            <h2 className="parrafo" style={{ textAlign: "center" }}>
              <strong>Fecha Del Pedido:</strong> {pedido.fecha}
            </h2>
            {pedido.productos.map((elemento) => {
              return (
                <ElementoPedido key={elemento._usuario} elemento={elemento} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ListaPedidos;
