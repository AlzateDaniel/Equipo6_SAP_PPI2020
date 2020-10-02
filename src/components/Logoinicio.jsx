import React from "react";
import "../Estilos.css";
import imagenes from "../assets/imagenes";
import { Link } from "react-router-dom";

function Logoinicio() {
  return (
    <div className="cuerpo">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/InicioCliente/Iniciocliente">
        <img
          src={imagenes.img27}
          alt="..."
          className="img-fluid mx-auto d-block"
        />
      </Link>
    </div>
  );
}

export default Logoinicio;
