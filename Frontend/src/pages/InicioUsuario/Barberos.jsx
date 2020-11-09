import React from "react";
import "../../Estilos.css";
import imagenes from "../../assets/imagenes";

import Link from '@material-ui/core/Link';
import { Link as RouterLink, withRouter } from 'react-router-dom';

const MyLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

function Barberos() {
  return (
    <div>
      <header>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={imagenes.img18}
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src={imagenes.img19}
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item ">
              <img
                src={imagenes.img20}
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </header>
      <hr />
      <main>
        <h1 id="Algunos" className="text-primary text-center my-4">
          Solicita el barbero que tu quieras
        </h1>
        <div className="card-columns">
          <div className="container text-center">
            <div className="card">
              <img
                src={imagenes.img12}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Michael Ross</h5>
                <p className="card-text">"Descripcion personal del barbero" </p>
                <p className="card-text"> 20.000$ </p>
                <Link to="/Agenda"  component={MyLink} className="btn btn-dark text-white">
                  {" "}
                  Agendar tu cita{" "}
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img17}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title"> David Arango </h5>
                <p className="card-text">
                  {" "}
                  "Descripcion personal del barbero"{" "}
                </p>
                <p className="card-text">45.000$ </p>
                <Link to="/Agenda"  component={MyLink} className="btn btn-dark text-white">
                  {" "}
                  Agendar tu cita{" "}
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img14}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title"> Harvy Specter</h5>
                <p className="card-text">
                  {" "}
                  "Descripcion personal del barbero"{" "}
                </p>
                <p className="card-text"> 40.000$ </p>
                <Link to="/Agenda"  component={MyLink} className="btn btn-dark text-white">
                  {" "}
                  Agendar tu cita{" "}
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img15}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Louis Dior</h5>
                <p className="card-text">"Descripcion personal del barbero" </p>
                <p className="card-text"> 15.000$ </p>
                <Link to="/Agenda"  component={MyLink} className="btn btn-dark text-white">
                  {" "}
                  Agendar tu cita{" "}
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img16}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title"> Sara Rodriguez </h5>
                <p className="card-text">"Descripcion personal del barbero" </p>
                <p className="card-text"> 25.000$ </p>
                <Link to="/Agenda"  component={MyLink} className="btn btn-dark text-white">
                  {" "}
                  Agendar tu cita{" "}
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img13}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title"> Jacob Alzate</h5>
                <p className="card-text">"Descripcion personal del barbero" </p>
                <p className="card-text"> 15.000$ </p>
                <Link to="/Agenda"  component={MyLink} className="btn btn-dark text-white">
                  {" "}
                  Agendar tu cita{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="copyright bg-dark text-white text-center">
          <p className="textoFooter">
            Todos los derechos reservados ©2020-2021
          </p>
          <i className="fab fa-instagram fa-2x"></i> &nbsp;&nbsp;
          <i className="fab fa-twitter fa-2x"></i> &nbsp;&nbsp;
          <i className="fab fa-facebook-square fa-2x"></i> &nbsp;&nbsp;
        </div>
      </footer>
    </div>
  );
}

export default withRouter (Barberos);
