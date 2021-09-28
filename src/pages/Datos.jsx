import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useHistory } from "react-router-dom";
import cogoToast from "cogo-toast";
import usuario from "../images/usuario.png";
import datoInicio from "../images/datoInicio.jpg";
import ListaPedidos from "../Components/Listas/ListaPedidos";
import ListaDatos from "../Components/Listas/ListaDatos";

const Datos = (props) => {
  const userId = props.datos.userId;
  const token = props.datos.token;
  const gestionarLogout = props.gestionarLogout;
  const handleEliminar = props.handleEliminar;
  const [datos, setDatos] = useState([]);
  const [pedidos, setPedidos] = useState([]);

  let history = useHistory();

  const recuperarDatosPersonales = async () => {
    await axios
      .get(process.env.REACT_APP_BACKEND_URL + `/api/datos/idUsuario/${userId}`)
      .then((response) => {
        setDatos(response.data.dato);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const recuperarPedidos = async () => {
    await axios
      .get(
        process.env.REACT_APP_BACKEND_URL + `/api/pedidos/idUsuario/${userId}`
      )
      .then((response) => {
        setPedidos(response.data.pedidos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    gestionarLogout();
    history.push("/");
    cogoToast.success("Has cerrado la sesión correctamente");
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div style={{ marginTop: "5.4rem", minHeight: "70vh" }}>
      <h1
        style={{ marginTop: "5.4rem", textAlign: "center" }}
        className="headings"
      >
        Área del Cliente
      </h1>
      <Tabs>
        <TabList>
          <Tab>Inicio</Tab>
          <Tab onClick={recuperarDatosPersonales}>Datos</Tab>
          <Tab onClick={recuperarPedidos}>Pedidos</Tab>
        </TabList>
        <TabPanel>
          <div
            data-aos="fade-up"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={datoInicio} alt="dato" />
            <button
              style={{ width: "50px", borderRadius: "50%" }}
              onClick={handleLogout}
              className="btn-form"
            >
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </div>
        </TabPanel>
        <TabPanel style={{ margin: "1rem" }}>
          <div data-aos="fade-zoom-in">
            <Card sx={{ maxWidth: 320 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={usuario}
                  alt="user"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Usuario
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <ListaDatos
                      key={datos._id}
                      datos={datos}
                      token={token}
                      handleEliminar={handleEliminar}
                    />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </TabPanel>
        <TabPanel>
          <div data-aos="fade-zoom-in">
            {pedidos.length === 0 && <h2>No hay pedidos para mostrar</h2>}
            <ListaPedidos key={pedidos._id} pedidos={pedidos} />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Datos;
