import React, { Fragment, useState } from "react";
import "../../Estilos.css";
import imagenes from "../../assets/imagenes";
import { Link } from "react-router-dom";

//DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//SelectDinamico
const categorias = [
  {
    servicio: "Barbero/a",
    trabajadores: [
      "Michael Ross",
      "Harvy Specter",
      "Sara Rodriguez",
      "David Arango",
      "Louis Dior",
      "Jacob Alzate",
    ],
  },
  {
    servicio: "Masajista",
    trabajadores: [
      "Esteban Pertuz",
      "Michell Perez",
      "Sara Cano",
      "Luisa Alzate",
      "Silvana Valencia",
      "Manuela Duarte",
    ],
  },
  {
    servicio: "Entrenador/a Personal",
    trabajadores: [
      "Jhon Pertur",
      "Samuel Oquendo",
      "Santiago Duque",
      "Marisol Lopez",
      "Natalia Munera",
      "Yeison Specter",
    ],
  },
  {
    servicio: "Manicurista",
    trabajadores: [
      "Derly Restrepo",
      "Lorena Montoya",
      "Nataly Arango",
      "Sara Orrego",
      "Luna Hernandez",
      "Francelly Arrubla",
    ],
  },
  {
    servicio: "Nutricionista",
    trabajadores: [
      "Tommy Alzate",
      "Hernan Cossio",
      "Luis Saltsman",
      "Stephan Salvatore",
      "James Arango",
      "Mateo Oasis",
    ],
  },
];
console.log("categorias", categorias);


function Agenda() {

  //SelectDinamico
  const [idArticulos, setIdArticulos] = useState(-1);
  const handlerCargarArticulos = function (e) {
    const opcion = e.target.value;
    console.log(opcion);
    setIdArticulos(opcion);
  };

  //DatePicker
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Fragment>
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand text-primary" to="/InicioPerfil">
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
                  <Link className="nav-link text-light" to="/InicioPerfil">
                    {" "}
                    Inicio <span className="sr-only">(current)</span>{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Quienessomos2">
                    {" "}
                    Quiénes Somos{" "}
                  </Link>
                </li>
                <li className="nav-item dropdown text-light">
                  <a
                    className="nav-link dropdown-toggle text-light"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Servicios
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="/Salud">
                      {" "}
                      Salud{" "}
                    </Link>
                    <Link className="dropdown-item" to="/Apariencia">
                      Apariencia
                    </Link>
                    <div className="dropdown-divider"></div>
                  </div>
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
              <div className="carousel-item active">
                <img
                  src={imagenes.img19}
                  className="d-block w-100"
                  alt="..."
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src={imagenes.img11}
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
          <h1 className="text-dark text-center my-5">Agenda tu cita</h1>
          <div align="center" className="contenedor">
            <form className="form col-12 col-md-6">
              <div className="">
                <label for="name">Servicios</label>
                <select
                  name="servicio"
                  id="selCategorias"
                  className="custom-select form"
                  onClick={handlerCargarArticulos}
                >
                  <option value={-1}> Seleccione un servicio </option>
                  {categorias.map((item, i) => (
                    <option key={"servicio" + i} value={i}>
                      {" "}
                      {item.servicio}{" "}
                    </option>
                  ))}
                </select>
                <label for="name">Trabajador</label>
                <select
                  name="trabajadores"
                  id="selArticulo"
                  className="custom-select form"
                >
                  <option> Seleccione su trabajador </option>
                  {idArticulos > -1 &&
                    categorias[idArticulos].trabajadores.map((item, i) => (
                      <option key={"trabajador" + i}> {item} </option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <div className="mb-3">
                  <label for="validationTextarea">Celular</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    name="telefono"
                    required
                  />
                </div>
              </div>
              <label for="validationTextarea">Selecciona fecha</label>
              <br />
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                isClearable
              />
              <br /> <br />
              <div className="text-center padding">
                <button
                  type="submit"
                  className=" btn btn-dark text-white col-12"
                >
                  {" "}
                  Enviar
                </button>
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
}

export default Agenda;
