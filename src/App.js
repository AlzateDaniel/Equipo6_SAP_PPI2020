import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import User from './components/User';
import Routes from './Routes';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { loadUser } from './utils/dbUtils';
import firebaseConfigSample from './config/firebaseConfigSample';
import Header from './components/layout/Header';

// Initialize Firebase
firebase.initializeApp(firebaseConfigSample)

function App() {
  const [user, setUser] = useState(null);

  const onLogout = () => {
    setUser(null);
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(response => {
      if (response) {
        // leer datos del usuario
        loadUser(response.uid)
        
        .then(data => { setUser(data); });
      }
    });
  }, []);

  return (
      <Router>
        <CssBaseline/>
        <Header> 
           {user && <User user={user} onLogout={onLogout} />}
        </Header>
        <Routes />
      </Router>
  );
}

export default App;
