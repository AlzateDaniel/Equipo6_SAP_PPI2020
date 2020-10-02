import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import '../Estilos.css'

//inicioLogo
import Logoinicio from '../components/Logoinicio';

//Inicio Cliente
import Iniciocliente from '../components/InicioCliente/Iniciocliente';
import Registro from '../components/InicioCliente/Registro';
import Quienessomos from '../components/InicioCliente/Quienessomos'; 

//Inicio usuario
import InicioPerfil from '../components/InicioUsuario/InicioPerfil';
import Quienessomos2 from '../components/InicioUsuario/Quienessomos2';
import Salud from '../components/InicioUsuario/Salud'
import Apariencia from '../components/InicioUsuario/Apariencia';
import Barberos from '../components/InicioUsuario/Barberos';
import Masajistas from '../components/InicioUsuario/Masajistas';
import Agenda from '../components/InicioUsuario/Agenda';

import Login from '../Login';




function App() {
  return (
    <Router>
    <div>   
         <Switch>
         <Route exact path="/">
             <Logoinicio/>
           </Route>
            
           <Route path="/Iniciocliente">
             <Iniciocliente/>
           </Route>
           <Route path="/Registro">
             <Registro/>
           </Route>
           <Route path="/Login">
             <Login/>
           </Route>
           <Route path="/Quienessomos">
              <Quienessomos/>
           </Route>

           <Route path="/InicioPerfil">
              <InicioPerfil/>
           </Route>
           <Route path="/Quienessomos2">
              <Quienessomos2/>
           </Route>
           <Route path="/Salud">
              <Salud/>
           </Route>
           <Route path="/Apariencia">
              <Apariencia/>
           </Route>
           <Route path="/Barberos">
              <Barberos/>
           </Route>
           <Route path="/Masajistas">
              <Masajistas/>
           </Route>
           <Route path="/Agenda">
              <Agenda/>
           </Route>
         </Switch>
    </div>
    </Router>
  );
}

export default App;
