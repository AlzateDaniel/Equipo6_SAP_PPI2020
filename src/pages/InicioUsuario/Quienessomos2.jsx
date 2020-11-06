import React from "react";
import imagenes from "../../assets/imagenes";
import "../../Estilos.css";

function Quienessomos() {
  return (
    <div>
      <header>
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
            <div className="carousel-item active">
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
        <h1 className="text-primary text-center my-4">Quienes Somos</h1>
        <div className="Contparrafo">
          <p className="Parrafo">
            Somos una aplicación para dispositivos móviles que ofrece un
            servicio de belleza y salud para las personas de San antonino de
            prado y sus alrededores, constara con servicio de: Barbería,
            Peluquería, Manicurista, Entrenador personal o en linea, Masajistas,
            y Nutricionista. Todos los servicios se realizaran en persona y el
            medio de pago sera contraentrega , aquel que quiera trabajar en la
            app se le harán unas medidas de aptitud con el fin de ser capacitado
            para el servicio
          </p>
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

export default Quienessomos;
