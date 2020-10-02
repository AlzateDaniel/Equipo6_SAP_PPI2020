import React, { Fragment, useState } from "react";
import imagenes from "../../assets/imagenes";
import "../../Estilos.css";
import { Link } from "react-router-dom";

const Registro = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
    telefono: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preveventDefault();
    console.log(
      "enviando datos..." +
        datos.nombre +
        " " +
        datos.apellido +
        " " +
        datos.correo +
        " " +
        datos.contraseña +
        " " +
        datos.telefono
    );
  };

  return (
    <Fragment>
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand text-primary" to="/Iniciocliente">
              BeautyServices
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link text-light" to="/Iniciocliente">
                    {" "}
                    Inicio <span className="sr-only">(current)</span>{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Quienessomos">
                    {" "}
                    Quiénes Somos{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text- light"
                    to="/Registro"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Registrate{" "}
                  </Link>
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
                  type="submit"
                >
                  {" "}
                  Buscar{" "}
                </button>
              </form>
            </div>
          </nav>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item">
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
              <div className="carousel-item active">
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
          <p align="center" className="text-primary">
            {" "}
            Esta es una aplicacion unicamente desarrollada para el corregimiento
            de San Antonio de Prado y sus alrededores , por lo tanto si no eres
            de esta ubicacion no te registres.{" "}
          </p>
          <hr />
          <h1 className="text-dark text-center my-5">Formulario de registro</h1>
          <div align="center" className="contenedor">
            <form className="form col-12 col-md-6" onSubmit={enviarDatos}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="name">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="nombre"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="lastName">Apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="apellido"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="inputEmail">Correo</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="email@example.com"
                  name="correo"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="inputCity">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputCity"
                    name="contraseña"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="name">Barrio</label>
                  <select class="custom-select">
                    <option selected>Selecciona tu Barrio</option>
                    <option value="1">Barichara</option>
                    <option value="2">Limonar 1</option>
                    <option value="3">Limonar 2</option>
                    <option value="4">Naranjito</option>
                    <option value="5">Las Playas</option>
                    <option value="6">Parque Centro</option>
                    <option value="7">Vereda</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label for="lastName">Ubicacion</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="apellido"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="mb-3">
                  <label for="validationTextarea">Celular</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    name="telefono"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="text-center padding">
                <Link to="/InicioPerfil">
                  <button
                    type="submit"
                    className=" btn btn-dark text-white col-12"
                  >
                    {" "}
                    Enviar
                  </button>
                </Link>
              </div>
            </form>
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
    </Fragment>
  );
};

export default Registro;
