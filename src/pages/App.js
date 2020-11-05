import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from '../Routes';

import '../Estilos.css'
import { useFirebaseApp } from 'reactfire';

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase); 

  return (
    <Router> 
    <div>   
        <CssBaseline/>
        <Routes/>
    </div>
    </Router>
  );
}

export default App;
  