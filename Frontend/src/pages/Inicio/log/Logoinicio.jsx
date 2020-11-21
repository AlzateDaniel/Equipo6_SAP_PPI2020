import React from "react";
import "../../../Estilos.css";
import imagenes from "../../../assets/imagenes";
import Link from '@material-ui/core/Link';
import { Link as RouterLink, withRouter } from 'react-router-dom';

const MyLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

function Logoinicio() {
  return (
    <div className="cuerpo">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

   
      <Link to="/userOempleado" component={MyLink}>
        <img
          src={imagenes.img27}
          alt="..."
          className="img-fluid mx-auto d-block"
        />
      </Link>
    </div>
  );
}

export default withRouter (Logoinicio);
