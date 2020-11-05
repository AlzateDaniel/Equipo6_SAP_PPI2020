import React from "react";
import "../../Estilos.css";
import imagenes from "../../assets/imagenes";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { BsPerson } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";

function Logoinicio2() {
  return (
    <div className="cuerpo">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <img
        src={imagenes.img27}
        alt="..."
        className="img-fluid mx-auto d-block"
      />
      <br />

      <div align="center">
        <Link to="/Registro">
          <Button className="mr-3" variant="outlined" color="primary">
            {" "}
            <BsPerson size="17px" /> Usuario{" "}
          </Button>
        </Link>

        <Link to="/registroTrabajador">
          <Button variant="outlined" color="primary">
            {" "}
            <FaUserTie /> Trabajador{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Logoinicio2;
