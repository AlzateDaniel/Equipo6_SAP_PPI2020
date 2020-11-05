import React from 'react';

import { Link } from "react-router-dom";
import Login from './Login';
import AppBar from "@material-ui/core/Toolbar";

import ExitToApp from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";

import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";

const Header = () => {

  const firebase = useFirebaseApp();
  const user = useUser();

  const cerrarSesion = async () => {
    await firebase.auth().signOut();
  };

  return (
     <div>
        <AppBar
          position="static"
          className="navbar navbar-expand-lg navbar-dark bg-dark"
        >
          <Login />

          <button
            className="navbar-toggler btn-lg"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
              <li className="nav-item">
                <Link className="nav-link text-light" to="/Chat">
                  {" "}
                  <p>Mensajes</p>
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
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
            <div>
              {user && (
                <IconButton onClick={cerrarSesion}>
                  {" "}
                  <Link to="/">
                    {" "}
                    <ExitToApp />{" "}
                  </Link>{" "}
                </IconButton>
              )}
            </div>
          </div>
        </AppBar>
     </div>
  ); 
}

export default Header;