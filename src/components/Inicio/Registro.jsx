import React from "react";
import "../../Estilos.css";
import imagenes from "../../assets/imagenes";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

//Importat React-Iconos
import { GoArrowRight, GoPerson } from "react-icons/go";


const Registro = () => {
  return (
    <div>
      <hr />
      <main>
        <p align="center" className="text-primary">
          {" "}
          Esta es una aplicacion unicamente desarrollada para el corregimiento
          de San Antonio de Prado y sus alrededores , por lo tanto si no eres de
          esta ubicacion no te registres.{" "}
        </p>
        <hr />

        <div className="cuerpo" align="center">
          <br />
          <br />
          <img
            src={imagenes.img27}
            alt="..."
            className="img-fluid mx-auto d-block"
          />
          <br />
          
        <Link to="/Registrarme"> 
          <Button
            className="mr-3"
            variant="outlined"
            color="primary"
          >
            {" "}
            <GoArrowRight size="17px"/> Registrarse </Button>
        </Link>
 
          <Link to="/IniciarSesion"> 
          <Button
            variant="outlined"
            color="primary"
          >
            {" "}
            <GoPerson /> Iniciar sesión </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Registro;
