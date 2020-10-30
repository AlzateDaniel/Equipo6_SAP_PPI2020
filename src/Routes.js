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

import IniciarSesion from './containers/IniciarSesion';
import Registrarme from './containers/Registrarme';
import Perfil from './containers/Perfil';

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
          <Route exact path="/" component={Logoinicio}/>  
          <Route path="/Logoinicio2" component={Logoinicio2}/>  
          <Route path="/Registro" component={Registro}/>  
          
          <Route path="/IniciarSesion" component={IniciarSesion}/>  
          <Route path="/Registrarme" component={Registrarme}/>  
          <Route path="/Perfil" component={Perfil}/>  

          <Route path="/InicioPerfil" component={InicioPerfil}/>  
          <Route path="/Quienessomos2"component={Quienessomos2}/>  
          <Route path="/Salud" component={Salud}/>  
          <Route path="/Apariencia" component={Apariencia}/>  
          <Route path="/Barberos" component={Barberos}/>  
          <Route path="/Masajistas" component={Masajistas}/>  
          <Route path="/Agenda" component={Agenda}/>  
        </Switch>
    </Router>
);

export default Routes;
