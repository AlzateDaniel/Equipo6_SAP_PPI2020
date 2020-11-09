import React from "react";
import "../../Estilos.css";
import imagenes from "../../assets/imagenes";

import Link from '@material-ui/core/Link';
import { Link as RouterLink, withRouter } from 'react-router-dom';

const MyLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);


function InicioPerfil() {

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
                src={imagenes.img1}
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src={imagenes.img2}
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item ">
              <img
                src={imagenes.img3}
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
        <h2 className="text-center text-center my-5">
          <small>
            Problemas con tu ¿apariencia? pide el servicio que quieras, nosotros
            te complacemos y mucho mas.
          </small>
        </h2>
        <hr />
        <h1 id="Algunos" className="text-primary text-center my-4">
          Algunos Servicios
        </h1>
        <div class="card-columns">
          <div className="container text-center">
            <div className="card">
              <img
                src={imagenes.img4}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Barberia</h5>
                <p className="card-text">
                  Solicita el servicio de barberia y agenda tu cita{" "}
                </p>
                <Link to="/Barberos" component={MyLink} className="btn btn-dark text-white">
                  Solicitar barbero{" "}
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img5}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title"> Manicure </h5>
                <p className="card-text">
                  {" "}
                  Solicita el servicio de Manicure y agenda tu cita{" "}
                </p>
                <Link to="/Manicuristas" component={MyLink} className="btn btn-dark text-white">
                  Solicitar manicurista{" "}
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img6}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Entrenador/a Personal</h5>
                <p className="card-text">
                  {" "}
                  Solicita el servicio de Trainning personal y contactese con el
                  asesor{" "}
                </p>
                <Link to="/Entrenadores" component={MyLink} className="btn btn-dark text-white">
                  Solicitar entrenador/a{" "}
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img7}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Masajista</h5>
                <p className="card-text">
                  {" "}
                  Solicita el servicio de Masajes y agenda tu cita{" "}
                </p>
                <Link to="/Masajistas" component={MyLink} className="btn btn-dark text-white">
                  Solicitar masajista{" "}
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img8}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Nutricionista</h5>
                <p className="card-text">
                  {" "}
                  Solicita el servicio de un Nutriologo y contactese con el
                </p>
                <Link to="/Nutricionistas" component={MyLink} className="btn btn-dark text-white">
                  Solicitar nutriologo{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <hr />
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

export default withRouter (InicioPerfil);
