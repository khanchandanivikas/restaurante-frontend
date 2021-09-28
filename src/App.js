import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import cogoToast from "cogo-toast";
import swal from "sweetalert";
import Header from "./Components/Header";
import CarritoIcono from "./Components/CarritoIcono";
import Footer from "./Components/Footer";
import Inicio from "./pages/Inicio";
import Carta from "./pages/Carta";
import Blog from "./pages/Blog";
import Reserva from "./pages/Reserva";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import FormularioDatosPersonal from "./pages/FormularioDatosPersonal";
import Datos from "./pages/Datos";
import Checkout from "./pages/Checkout";

function App() {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart" || []));
  const [cartItems, setCartItems] = useState(cartFromLocalStorage || []);
  const [blogs, setBlogs] = useState([]);
  // datos  a la hora del login y alta userId y token
  const [datos, setDatos] = useState({});
  // token
  const [token, setToken] = useState("");

  // carta
  const [entrantes, setEntrantes] = useState([]);
  const [segundoPlatos, setSegundoPlatos] = useState([]);
  const [platosPrincipales, setPlatosPrincipales] = useState([]);
  const [postres, setPostres] = useState([]);
  const [cocktails, setCocktails] = useState([]);

  // login y alta
  const gestionarAcceso = (dato) => {
    setDatos(dato);
    setToken(dato.token);
    localStorage.setItem(
      "datosUsuario",
      JSON.stringify({
        userId: dato.userId,
        token: dato.token,
      })
    );
  };

  // logout usuario
  const gestionarLogout = () => {
    setToken(null);
    setDatos(null);
    setCartItems([]);
    localStorage.setItem("datosUsuario", JSON.stringify({}));
    localStorage.setItem("cart", JSON.stringify([]));
  };

  // eliminar usuario
  const handleEliminar = async () => {
    await axios
      .delete(
        process.env.REACT_APP_BACKEND_URL + `/api/usuarios/${datos.userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        localStorage.setItem("datosUsuario", JSON.stringify({}));
        localStorage.setItem("cart", JSON.stringify([]));
        setDatos({});
        setToken(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // añadir al carrito
  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item._id === product._id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...productExist, cantidad: productExist.cantidad + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, cantidad: 1 }]);
    }
  };

  // quitar del carrito
  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item._id === product._id);
    if (productExist.cantidad === 1) {
      setCartItems(cartItems.filter((item) => item._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...productExist, cantidad: productExist.cantidad - 1 }
            : item
        )
      );
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
  };

  // finalizar la compra
  const handleCheckout = async () => {
    let today = new Date().toLocaleDateString();
    await axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/api/pedidos/",
        {
          fecha: `${today}`,
          productos: cartItems,
          usuario: datos.userId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setCartItems([]);
        localStorage.setItem("cart", JSON.stringify([]));
        cogoToast.success(
          "Se ha realizado la compra de su pedido correctamente"
        );
      })
      .catch((error) => {
        console.log(error);
        swal(
          "Error",
          "Para realizar la compra tiene que haber iniciado sesión",
          "warning"
        );
      });
  };

  // menu del carta
  const recuperarCartas = async () => {
    try {
      const requestEntrantes = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/api/carta/categoria/entrante"
      );
      const requestSegundoPlatos = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/api/carta/categoria/segundo plato"
      );
      const requestPlatosPrincipales = await axios.get(
        process.env.REACT_APP_BACKEND_URL +
          "/api/carta/categoria/plato principal"
      );
      const requestPostres = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/api/carta/categoria/postre"
      );
      const requestCocktails = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/api/carta/categoria/cocktail"
      );
      const datosEntrantes = requestEntrantes.data;
      const datosSegundoPlatos = requestSegundoPlatos.data;
      const datosPlatosPrincipales = requestPlatosPrincipales.data;
      const datosPostres = requestPostres.data;
      const datosCocktails = requestCocktails.data;
      setEntrantes(datosEntrantes.cartas);
      setSegundoPlatos(datosSegundoPlatos.cartas);
      setPlatosPrincipales(datosPlatosPrincipales.cartas);
      setPostres(datosPostres.cartas);
      setCocktails(datosCocktails.cartas);
    } catch (error) {
      console.log("error", error);
    }
  };

  // blogs
  const recuperarBlogs = async () => {
    try {
      const request = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/api/blog/"
      );
      const datos = request.data;
      setBlogs(datos.blogs);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    recuperarCartas();
    recuperarBlogs();
    const datosRecuperar = JSON.parse(localStorage.getItem("datosUsuario"));
    if (datosRecuperar && datosRecuperar.token) {
      setToken(datosRecuperar.token);
      setDatos(datosRecuperar);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="App">
      <Router>
        <Header token={token} />
        <CarritoIcono cartItems={cartItems} />
        <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route path="/carta">
            <Carta
              handleAddProduct={handleAddProduct}
              entrantes={entrantes}
              segundoPlatos={segundoPlatos}
              platosPrincipales={platosPrincipales}
              postres={postres}
              cocktails={cocktails}
            />
          </Route>
          <Route path="/blog">
            <Blog blogs={blogs} />
          </Route>
          <Route path="/reserva">
            <Reserva />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/login">
            <Login gestionarAcceso={gestionarAcceso} />
          </Route>
          <Route path="/formDatos">
            {token && <FormularioDatosPersonal datos={datos} />}
          </Route>
          <Route path="/personal">
            {token && (
              <Datos
                gestionarLogout={gestionarLogout}
                handleEliminar={handleEliminar}
                datos={datos}
              />
            )}
          </Route>
          <Route path="/checkout">
            <Checkout
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance}
              cartItems={cartItems}
              handleCheckout={handleCheckout}
              token={token}
            />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
