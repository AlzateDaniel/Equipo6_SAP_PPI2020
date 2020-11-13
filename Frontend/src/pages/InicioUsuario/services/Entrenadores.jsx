import React from "react";
import "../../../Estilos.css";
import imagenes from "../../../assets/imagenes";

import Footer from '../../../components/layout/Footer';

import Link from '@material-ui/core/Link';
import { Link as RouterLink, withRouter } from 'react-router-dom';

const MyLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

function Entrenadores() {
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
                src={imagenes.img28}
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
          Solicita El Entrenador/a que tu quieras 
        </h1>
        <div className="card-columns">
          <div className="container text-center">
            <div className="card">
              <img
                src={imagenes.img29}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title"> Jhon Pertur </h5>
                <p className="card-text">
                  "Descripcion personal del Entrenador"{" "}
                </p>
                <p className="card-text"> $20.000 </p>
                <Link to="/agenda" component={MyLink} className="btn btn-dark text-white">
                  {" "}
                  Agendar tu cita{" "}
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img30}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title"> Samuel Oquendo </h5>
                <p className="card-text">
                  {" "}
                  "Descripcion personal del Entrenador"{" "}
                </p>
                <p className="card-text">45.000$ </p>
                <Link to="/agenda" component={MyLink} className="btn btn-dark text-white">
                  {" "}
                  Agendar tu cita{" "}
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img31}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title"> Santiago Duque </h5>
                <p className="card-text">
                  {" "}
                  "Descripcion personal del Entrenador"{" "}
                </p>
                <p className="card-text"> 40.000$ </p>
                <Link to="/agenda"  component={MyLink} className="btn btn-dark text-white">
                  {" "}
                  Agendar tu cita{" "}
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img32}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Marisol Lopez</h5>
                <p className="card-text">
                  "Descripcion personal de la Entrenadora"{" "}
                </p>
                <p className="card-text"> 15.000$ </p>
                <Link to="/agenda" component={MyLink} className="btn btn-dark text-white">
                  {" "}
                  Agendar tu cita{" "}
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img33}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Natalia Munera </h5>
                <p className="card-text">
                  "Descripcion personal de la Entrenadora"{" "}
                </p>
                <p className="card-text"> 25.000$ </p>
                <Link to="/agenda" component={MyLink} className="btn btn-dark text-white">
                  {" "}
                  Agendar tu cita{" "}
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img34}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Yeison Specter</h5>
                <p className="card-text">
                  "Descripcion personal del Entrenador"{" "}
                </p>
                <p className="card-text"> 15.000$ </p>
                <Link to="/agenda" component={MyLink} className="btn btn-dark text-white">
                  {" "}
                  Agendar tu cita{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default withRouter (Entrenadores);
