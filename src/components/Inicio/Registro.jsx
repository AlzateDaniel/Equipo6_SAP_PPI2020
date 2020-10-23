import React, { useState } from "react";
import "../../Estilos.css";
import imagenes from "../../assets/imagenes";
import { Button } from "@material-ui/core";
import Login from '../../containers/Login';
import { Link } from "react-router-dom";

//Importar Firebase
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";

//Importat React-Iconos
import { GoArrowRight, GoPerson } from "react-icons/go";


//Importar Modal
import Modal from "react-modal";
Modal.setAppElement("#root");

const Logoregistro = () => {
  //Modales Iniciar sesiony registro
  const [modalsOpen, setModalsOpen] = useState(false);
  const [modalsOpenn, setModalsOpenn] = useState(false);

  //FireBase
  const firebase = useFirebaseApp();
  const user = useUser();

  //Hooks Registrarse
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");

  //registroFormulario
  const registroForm = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, clave);
  };

  //iniciar sesion
  const iniciar = async () => {
    await firebase.auth().signInWithEmailAndPassword(email, clave);
  };

  //Cerrar Sesion
  const cerrarSesion = async () => {
    await firebase.auth().signOut();
  };

  return (
    <div>
      <hr />
      <main>
        <p align="center" className="text-primary">
          {" "}
          Esta es una aplicacion unicamente desarrollada para el corregimiento
          de San Antonio de Prado y sus alrededores , por lo tanto si no eres de
          esta ubicacion no te registres.{" "}
        </p>
        <hr />

        <div className="cuerpo" align="center">
          <br />
          <br />
          <img
            src={imagenes.img27}
            alt="..."
            className="img-fluid mx-auto d-block"
          />
          <br />

          <Button
            onClick={() => setModalsOpenn(true)}
            className="mr-3"
            variant="outlined"
            color="primary"
          >
            {" "}
            <GoArrowRight size="17px"/> Registrarse
          </Button>

          <Button
            onClick={() => setModalsOpen(true)}
            variant="outlined"
            color="primary"
          >
            {" "}
            <GoPerson /> Iniciar sesión
          </Button>

          <Modal
            style={{
              content: {
                width: "80%",
                height: "400px",
              },
            }}
            isOpen={modalsOpen}
            onRequestClose={() => setModalsOpen(false)}
          >
            <div className="modalIniciarsesion">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Iniciar Sesion
                </h5>
                <button
                  onClick={() => setModalsOpen(false)}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                {!user && (
                  <form id="registro">
                    <div className="form-group">
                      <label for="inputEmail">Correo</label>
                      <input
                        type="text"
                        id="email"
                        onChange={(ev) => setEmail(ev.target.value)}
                        className="form-control"
                        placeholder="example@gmail.com"
                        required
                      />
                      <br />
                      <label for="inputCity">Contraseña</label>
                      <input
                        type="password"
                        id="clave"
                        onChange={(ev) => setClave(ev.target.value)}
                        className="form-control"
                        placeholder="clave"
                        required
                      />
                    </div>
                  </form>
                )}
                {user && (
                  <button onClick={cerrarSesion}> Cerrar sesion </button>
                )}
              </div>

              <hr />
              <div align="center">
                <button
                  onClick={() => setModalsOpen(false)}
                  className="btn btn-outline-primary mr-3"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  onClick={iniciar}
                  type="submit"
                  className="btn btn-outline-primary"
                >
                  {" "}
                  Iniciar sesion{" "}
                </button>
              </div>
            </div>
          </Modal>

          <Modal
            style={{
              content: {
                width: "80%",
                height: "540px",
              },
            }}
            isOpen={modalsOpenn}
            onRequestClose={() => setModalsOpenn(false)}
          >
            <div className="modalRegistro">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Registrate
                </h5>
                <button
                  onClick={() => setModalsOpenn(false)}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <form id="registro">
                  <div className="form">
                    <label for="inputEmail">Registro con google</label>

                    <Login/>
    
                  </div>
                </form>
              </div>
              <hr />
              <div>
                <h5 className="modal-title" id="exampleModalLabel">
                  {" "}
                  Formulario registro{" "}
                </h5>
                <br />
                <label for="inputEmail">Correo</label>
                <input
                  type="text"
                  id="email"
                  onChange={(ev) => setEmail(ev.target.value)}
                  className="form-control"
                  placeholder="example@gmail.com"
                  required
                />
                <br />
                <label for="inputCity">Contraseña</label>
                <input
                  type="password"
                  id="clave"
                  onChange={(ev) => setClave(ev.target.value)}
                  className="form-control"
                  placeholder="clave"
                  required
                />
              </div>
              <hr />
              <div align="center">
                <button
                  onClick={() => setModalsOpenn(false)}
                  className="btn btn-outline-primary mr-3"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  onClick={registroForm}
                  type="submit"
                  className="btn btn-outline-primary"
                >
                  {" "}

                 <Link to="/InicioPerfil"> Crear cuenta </Link> {" "}
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </main>
    </div>
  );
};

export default Logoregistro;
