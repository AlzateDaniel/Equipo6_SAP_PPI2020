import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import firebaseConfig from './initializers/firebase';
import { FirebaseAppProvider } from 'reactfire';
import { Provider } from 'react-redux';

import firebase from './initializers/firebase';
import store from './initializers/store';
import { setUser, clearUser } from './initializers/actions';

//Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

firebase.auth().onAuthStateChanged((user)=>{
  if (user){
    store.dispatch(setUser(user));

  } else {
    store.dispatch(clearUser());
  }
})


ReactDOM.render((
  <Provider store={store}>
   <FirebaseAppProvider firebaseConfig={firebaseConfig}>
     <Suspense fallback={'Conectando a la App...'}>
       <App />
     </Suspense>
   </FirebaseAppProvider>
  </Provider>
),document.getElementById('root'));


