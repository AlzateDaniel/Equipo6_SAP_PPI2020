import React from "react";
import "../../../Estilos.css";
import imagenes from "../../../assets/imagenes";
import Footer from '../../../components/layout/Footer';

import Link from '@material-ui/core/Link';
import { Link as RouterLink, withRouter } from 'react-router-dom';

const MyLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

function Manicuristas() {
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
                src={imagenes.img45}
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src={imagenes.img46}
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
          Solicita la Manicurista que tu quieras 
        </h1>
        <div className="card-columns">
          <div className="container text-center">
            <div className="card">
              <img
                src={imagenes.img47}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title"> Derly Restrepo </h5>
                <p className="card-text">
                  "Descripcion personal de la Nutricionista"{" "}
                </p>
                <p className="card-text"> $20.000 </p>
                <Link to="/Agenda" component={MyLink} className="btn btn-dark text-white">
                  {" "}
                  Agendar tu cita{" "}
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img48}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Lorena Montoya </h5>
                <p className="card-text">
                  {" "}
                  "Descripcion personal de la Manicurista"{" "}
                </p>
                <p className="card-text">45.000$ </p>
                <Link to="/Agenda" component={MyLink} className="btn btn-dark text-white">
                  {" "}
                  Agendar tu cita{" "}
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img49}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Nataly Arango </h5>
                <p className="card-text">
                  {" "}
                  "Descripcion personal de la Manicurista"{" "}
                </p>
                <p className="card-text"> 40.000$ </p>
                <a
                  href="https://api.whatsapp.com/send?phone=57 322-354-8335&amp;text=Hola,%20me%20gustaria%20solicitar%20un%20servicio..."
                  className="btn btn-dark text-white"
                >
                  Agenda tu cita
                </a>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img50}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Sara Orrego</h5>
                <p className="card-text">
                  "Descripcion personal de la Manicurista"{" "}
                </p>
                <p className="card-text"> 15.000$ </p>
                <Link to="/Agenda" component={MyLink} className="btn btn-dark text-white">
                  {" "}
                  Agendar tu cita{" "}
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img51}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Luna Hernandez</h5>
                <p className="card-text">
                  "Descripcion personal de la Manicurista"{" "}
                </p>
                <p className="card-text"> 25.000$ </p>
                <Link to="/Agenda" component={MyLink} className="btn btn-dark text-white">
                  {" "}
                  Agendar tu cita{" "}
                </Link>
              </div>
            </div>
            <div className="card">
              <img
                src={imagenes.img52}
                className="card-img-top img-fluid"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Francelly Arrubla</h5>
                <p className="card-text">
                  "Descripcion personal de la Manicurista"{" "}
                </p>
                <p className="card-text"> 15.000$ </p>
                <Link to="/Agenda" component={MyLink} className="btn btn-dark text-white">
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

export default withRouter (Manicuristas);
