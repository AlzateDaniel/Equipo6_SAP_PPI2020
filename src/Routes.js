import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

//inicioLogo
import Logoinicio from './components/Inicio/Logoinicio';
import Logoinicio2 from './components/Inicio/Logoinicio2';
import Registro from './components/Inicio/Registro';

//Inicio usuario
import InicioPerfil from './components/inicioUsuario/InicioPerfil';
import Quienessomos2 from './components/inicioUsuario/Quienessomos2';
import Salud from './components/inicioUsuario/Salud'
import Apariencia from './components/inicioUsuario/Apariencia';
import Barberos from './components/inicioUsuario/Barberos';
import Masajistas from './components/inicioUsuario/Masajistas';
import Agenda from './components/inicioUsuario/Agenda';

const Routes = () => (

    <Router> 
       <Switch>
          <Route exact path="/"> <Logoinicio/> </Route> 
          <Route path="/Logoinicio2"> <Logoinicio2/> </Route>  
          <Route path="/Registro"> <Registro/> </Route>

          <Route path="/InicioPerfil"> <InicioPerfil/> </Route>
          <Route path="/Quienessomos2"> <Quienessomos2/> </Route>
          <Route path="/Salud"> <Salud/> </Route>
          <Route path="/Apariencia"> <Apariencia/> </Route>
          <Route path="/Barberos"> <Barberos/> </Route>
          <Route path="/Masajistas"> <Masajistas/> </Route>
          <Route path="/Agenda"> <Agenda/> </Route>
        </Switch>
    </Router>
);

export default Routes;
