import React from "react";
import { useState } from "react";
import ListaEntrante from "./Listas/ListaEntrante";
import ListaSegundoPlato from "./Listas/ListaSegundoPlato";
import ListaPlatoPrincipal from "./Listas/ListaPlatoPrincipal";
import ListaPostre from "./Listas/ListaPostre";
import ListaCocktail from "./Listas/ListaCocktail";
import { Link } from "react-scroll";
import "../style/PanelCarta.css";
import entrante from "../images/entrante.jpg";
import segundo from "../images/segundo.jpg";
import principal from "../images/principal.jpg";
import postre from "../images/postre.jpg";
import cocktail from "../images/cocktail.jpg";

const PanelCarta = (props) => {
  const handleAddProduct = props.handleAddProduct;
  const entrantes = props.listaEntrantes;
  const segundoPlatos = props.listaSegundoPlatos;
  const platosPrincipales = props.listaPlatosPrincipales;
  const postres = props.listaPostres;
  const cocktails = props.listaCocktails;

  const [activeUno, setNuevoActiveUno] = useState(true);
  const [activeDos, setNuevoActiveDos] = useState(false);
  const [activeTres, setNuevoActiveTres] = useState(false);
  const [activeCuatro, setNuevoActiveCuatro] = useState(false);
  const [activeCinco, setNuevoActiveCinco] = useState(false);

  const handleClickUno = () => {
    setNuevoActiveUno(true);
    setNuevoActiveDos(false);
    setNuevoActiveTres(false);
    setNuevoActiveCuatro(false);
    setNuevoActiveCinco(false);
  };
  const handleClickDos = () => {
    setNuevoActiveDos(true);
    setNuevoActiveUno(false);
    setNuevoActiveTres(false);
    setNuevoActiveCuatro(false);
    setNuevoActiveCinco(false);
  };
  const handleClickTres = () => {
    setNuevoActiveUno(false);
    setNuevoActiveDos(false);
    setNuevoActiveTres(true);
    setNuevoActiveCuatro(false);
    setNuevoActiveCinco(false);
  };
  const handleClickCuatro = () => {
    setNuevoActiveUno(false);
    setNuevoActiveDos(false);
    setNuevoActiveTres(false);
    setNuevoActiveCuatro(true);
    setNuevoActiveCinco(false);
  };
  const handleClickCinco = () => {
    setNuevoActiveUno(false);
    setNuevoActiveDos(false);
    setNuevoActiveTres(false);
    setNuevoActiveCuatro(false);
    setNuevoActiveCinco(true);
  };

  return (
    <div>
      <div className="container-paneles">
        <Link
          to="entrantes"
          smooth={true}
          delay={1000}
          onClick={handleClickUno}
          className={activeUno ? "panel-active" : "panel"}
          style={{
            backgroundImage: `url(${entrante})`,
          }}
        >
          <h1
            className={
              activeUno ? "panel-heading-active" : "panel-heading-inactive"
            }
          >
            ENTRANTES
          </h1>
        </Link>
        <Link
          to="entrantes"
          smooth={true}
          delay={1000}
          onClick={handleClickTres}
          className={activeTres ? "panel-active" : "panel"}
          style={{
            backgroundImage: `url(${principal})`,
          }}
        >
          <h1
            className={
              activeTres ? "panel-heading-active" : "panel-heading-inactive"
            }
          >
            PRINCIPALES
          </h1>
        </Link>
        <Link
          to="entrantes"
          smooth={true}
          delay={1000}
          onClick={handleClickDos}
          className={activeDos ? "panel-active" : "panel"}
          style={{
            backgroundImage: `url(${segundo})`,
          }}
        >
          <h1
            className={
              activeDos ? "panel-heading-active" : "panel-heading-inactive"
            }
          >
            SEGUNDOS
          </h1>
        </Link>
        <Link
          to="entrantes"
          smooth={true}
          delay={1000}
          onClick={handleClickCuatro}
          className={activeCuatro ? "panel-active" : "panel"}
          style={{
            backgroundImage: `url(${postre})`,
          }}
        >
          <h1
            className={
              activeCuatro ? "panel-heading-active" : "panel-heading-inactive"
            }
          >
            POSTRES
          </h1>
        </Link>
        <Link
          to="entrantes"
          smooth={true}
          delay={1000}
          onClick={handleClickCinco}
          className={activeCinco ? "panel-active" : "panel"}
          style={{
            backgroundImage: `url(${cocktail})`,
          }}
        >
          <h1
            className={
              activeCinco ? "panel-heading-active" : "panel-heading-inactive"
            }
          >
            COCKTAILS
          </h1>
        </Link>
      </div>
      <div id="entrantes">
        {activeUno ? (
          <ListaEntrante
            handleAddProduct={handleAddProduct}
            entrantes={entrantes}
          />
        ) : null}
        {activeDos ? (
          <ListaSegundoPlato
            handleAddProduct={handleAddProduct}
            segundoPlatos={segundoPlatos}
          />
        ) : null}
        {activeTres ? (
          <ListaPlatoPrincipal
            handleAddProduct={handleAddProduct}
            platosPrincipales={platosPrincipales}
          />
        ) : null}
        {activeCuatro ? (
          <ListaPostre handleAddProduct={handleAddProduct} postres={postres} />
        ) : null}
        {activeCinco ? (
          <ListaCocktail
            handleAddProduct={handleAddProduct}
            cocktails={cocktails}
          />
        ) : null}
      </div>
    </div>
  );
};

export default PanelCarta;
