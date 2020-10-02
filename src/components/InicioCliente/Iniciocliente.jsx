import React from "react";
import imagenes from "../../assets/imagenes";
import'../../Estilos.css';
import {Link} from 'react-router-dom';

function Iniciocliente() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand text-primary" to="/Iniciocliente">BeautyServices </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">  
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <Link className="nav-link text-light" to="/Iniciocliente"> Inicio <span className="sr-only">(current)</span> </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/Quienessomos"> Quiénes Somos </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text- light" to="/Registro" tabindex="-1" aria-disabled="true" >Registrate</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-4 col-7 "
                type="search"
                placeholder="¿Qué Buscas?"
                aria-label="Search"
              ></input>
              <button
                className="btn btn-outline-light my-2 my-sm-0 mx-2 col-3 "
                type="submit"> Buscar </button>
            </form>
          </div>
        </nav>
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
      <hr/>
      <main>
        <h1 className="text-center text-center my-5">
          <small>
            Problemas con tu apariencia? pide el servicio que quieras, nosotros
            te complacemos y mucho mas.
          </small>
        </h1>
        <hr/>
        <h1 id="Algunos" className="text-primary text-center my-4">Algunos Servicios</h1>
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
                <Link to="/Registro" className="btn btn-dark text-white">Solicitar barbero </Link>
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
                <Link to="/Registro" className="btn btn-dark text-white">Solicitar manicurista </Link>
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
                <Link to="/Registro" className="btn btn-dark text-white">Solicitar entrenador/a </Link>
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
                <Link to="/Registro" className="btn btn-dark text-white">Solicitar masajista </Link>
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
                <Link to="/Registro" className="btn btn-dark text-white">Solicitar nutriologo</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <hr/>
      <footer>
        <div className="copyright bg-dark text-white text-center">
          <p className="textoFooter">Todos los derechos reservados ©2020-2021</p>
          <i className="fab fa-instagram fa-2x"></i> &nbsp;&nbsp;
          <i className="fab fa-twitter fa-2x"></i> &nbsp;&nbsp;
          <i className="fab fa-facebook-square fa-2x"></i> &nbsp;&nbsp;
        </div>
      </footer>
    </div>
  );
}

export default Iniciocliente;
