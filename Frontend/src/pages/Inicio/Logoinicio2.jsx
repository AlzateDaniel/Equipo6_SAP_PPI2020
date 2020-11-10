import React from "react";
import imagenes from "../../assets/imagenes";
import Button from "@material-ui/core/Button";
import { BsPerson } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";

import Link from '@material-ui/core/Link';
import { Link as RouterLink, withRouter } from 'react-router-dom';

const MyLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

function Logoinicio2() {
  return (
    <div className="cuerpo">
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
        <Link to="/registrooIniciar" component={MyLink}>
          <Button className="mr-3" variant="outlined" color="primary">
            {" "}
            <BsPerson size="17px" /> Usuario{" "}
          </Button>
        </Link>

        <Link to="/registroTrabajador"  component={MyLink}>
          <Button variant="outlined" color="primary">
            {" "}
            <FaUserTie /> Empleado{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default withRouter (Logoinicio2);
