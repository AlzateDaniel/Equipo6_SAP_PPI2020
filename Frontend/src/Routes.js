import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Componentes
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';
import Profile from './components/Profile';

//Inicios LOGO
import Logoinicio from './pages/Inicio/Logoinicio';
import Logoinicio2 from './pages/Inicio/Logoinicio2';
import Registro from './pages/Inicio/Registro';

//InicioUsuario
import inicioPerfil from './pages/InicioUsuario/InicioPerfil';
import Quienessomos2 from './pages/InicioUsuario/Quienessomos2';
import Salud from './pages/InicioUsuario/Salud';
import Apariencia from './pages/InicioUsuario/Apariencia';
import Agenda from './pages/InicioUsuario/Agenda';

//Servicios
import Entrenadores from './pages/InicioUsuario/services/Entrenadores';
import Barberos from './pages/InicioUsuario/services/Barberos';
import Masajistas from './pages/InicioUsuario/services/Masajistas';
import Nutricionistas from './pages/InicioUsuario/services/Nutricionistas';



const Routes = () => (
  <Switch>
    <Route exact path="/" component={Logoinicio} />
    <Route path="/userOempleado" component={Logoinicio2} />
    <Route path="/registrooIniciar" component={Registro} />

    <Route path="/chat" component={Chat} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/profile" component={Profile} />

    <Route path="/inicioPerfil" component={inicioPerfil}/>  
    <Route path="/quienesSomos"component={Quienessomos2}/>  
    <Route path="/salud" component={Salud}/>  
    <Route path="/apariencia" component={Apariencia}/>  
    <Route path="/barberos" component={Barberos}/>  
    <Route path="/masajistas" component={Masajistas}/>  
    <Route path="/entrenadores" component={Entrenadores}/>  
    <Route path="/nutricionistas" component={Nutricionistas}/> 
    <Route path="/agenda" component={Agenda}/>  
  </Switch>
);

export default Routes;
