import React from "react";

import imagenes from "../../assets/imagenes";
import { Button } from "@material-ui/core";

//Importat React-Iconos
import { GoArrowRight, GoPerson } from "react-icons/go";

import Link from '@material-ui/core/Link';
import { Link as RouterLink, withRouter } from 'react-router-dom';

const MyLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);


const Regempleado = () => {
  return (
    <div>
      <hr />
      <main>
        <p align="center" className="text-primary">
          {" "}
          Registrate como Empleado y da el mejor servicio a tus clientes del corregimiento de 
          San Antonio de Prado y sus alrededores.{" "}
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
          
        <Link to="/signupEmpleado"  component={MyLink}> 
          <Button
            className="mr-3"
            variant="outlined"
            color="primary"
          >
            {" "}
            <GoArrowRight size="17px"/> Registrarse </Button>
        </Link>
 
          <Link to="/loginEmpleado"  component={MyLink}> 
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

export default withRouter (Regempleado);