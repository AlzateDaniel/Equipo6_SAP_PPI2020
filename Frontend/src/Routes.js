import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Componentes
//Usuario
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';
import Profile from './components/Profile';
//Empleados
import Loginempleado from './components/empleado/Loginempleado';
import Signupempleado from './components/empleado/Signupempleado';

//Inicios LOGO
import Logoinicio from './pages/Inicio/log/Logoinicio';
import Logoinicio2 from './pages/Inicio/log/Logoinicio2';
import Regusuario from './pages/Inicio/Regusuario';
import Regempleado from './pages/Inicio/Regempleado';

//InicioUsuario
import inicioPerfil from './pages/InicioUsuario/InicioPerfil';
import Quienessomos2 from './pages/InicioUsuario/Quienessomos2';
import Salud from './pages/InicioUsuario/Salud';
import Apariencia from './pages/InicioUsuario/Apariencia';
import Agenda from './pages/InicioUsuario/Agenda';

//InicioEmpleado
import inicioEmpleado from './pages/inicioEmpleado/InicioEmpleado';

//Servicios
import Entrenadores from './pages/InicioUsuario/services/Entrenadores';
import Barberos from './pages/InicioUsuario/services/Barberos';
import Masajistas from './pages/InicioUsuario/services/Masajistas';
import Nutricionistas from './pages/InicioUsuario/services/Nutricionistas';
import Manicuristas from './pages/InicioUsuario/services/Manicuristas';




const Routes = () => (
  <Switch>
    <Route exact path="/" component={Logoinicio} />
    <Route path="/userOempleado" component={Logoinicio2} />
    <Route path="/regUsuario" component={Regusuario} />
    <Route path="/regEmpleado" component={Regempleado} />

    <Route path="/chat" component={Chat} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/profile" component={Profile} />

    <Route path="/loginEmpleado" component={Loginempleado} />
    <Route path="/signupEmpleado" component={Signupempleado} />

    <Route path="/inicioPerfil" component={inicioPerfil}/>  
    <Route path="/quienesSomos"component={Quienessomos2}/>  
    <Route path="/salud" component={Salud}/>  
    <Route path="/apariencia" component={Apariencia}/>  
    <Route path="/agenda" component={Agenda}/>  

    <Route path="/inicioEmpleado" component={inicioEmpleado}/>  

    <Route path="/barberos" component={Barberos}/>  
    <Route path="/masajistas" component={Masajistas}/>  
    <Route path="/entrenadores" component={Entrenadores}/>  
    <Route path="/nutricionistas" component={Nutricionistas}/> 
    <Route path="/manicuristas" component={Manicuristas}/> 
  </Switch>
);

export default Routes;
