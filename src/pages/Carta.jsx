import React from "react";
import PanelCarta from "../Components/PanelCarta";

const Carta = (props) => {
  const listaEntrantes = props.entrantes;
  const listaSegundoPlatos = props.segundoPlatos;
  const listaPlatosPrincipales = props.platosPrincipales;
  const listaPostres = props.postres;
  const listaCocktails = props.cocktails;
  const handleAddProduct = props.handleAddProduct;
  return (
    <div>
      <PanelCarta
        handleAddProduct={handleAddProduct}
        listaEntrantes={listaEntrantes}
        listaSegundoPlatos={listaSegundoPlatos}
        listaPlatosPrincipales={listaPlatosPrincipales}
        listaPostres={listaPostres}
        listaCocktails={listaCocktails}
      />
    </div>
  );
};

export default Carta;
