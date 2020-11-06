import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';
import Profile from './components/Profile';

import Logoinicio from './pages/Inicio/Logoinicio';
import Logoinicio2 from './pages/Inicio/Logoinicio2';
import Registro from './pages/Inicio/Registro';

import inicioPerfil from './pages/InicioUsuario/InicioPerfil';
import Quienessomos2 from './pages/InicioUsuario/Quienessomos2';
import Salud from './pages/InicioUsuario/Salud';
import Apariencia from './pages/InicioUsuario/Apariencia';
import Barberos from './pages/InicioUsuario/Barberos';
import Masajistas from './pages/InicioUsuario/Masajistas';
import Agenda from './pages/InicioUsuario/Agenda';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Logoinicio} />
    <Route exact path="/userOempleado" component={Logoinicio2} />
    <Route exact path="/registrooIniciar" component={Registro} />

    <Route exact path="/Chat" component={Chat} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/profile" component={Profile} />

    <Route exact path="/inicioPerfil" component={inicioPerfil}/>  
    <Route exact path="/quienesSomos"component={Quienessomos2}/>  
    <Route exact path="/salud" component={Salud}/>  
    <Route exact path="/apariencia" component={Apariencia}/>  
    <Route exact path="/barberos" component={Barberos}/>  
    <Route exact path="/masajistas" component={Masajistas}/>  
    <Route exact path="/agenda" component={Agenda}/>  
  </Switch>
);

export default Routes;
