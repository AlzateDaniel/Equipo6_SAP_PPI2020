import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './fireBase';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class login extends Component {
    render(){
        const {user, signOut, signInWithGoogle} = this.props;
        return (
            <div>
                {
                    user ? <p> Hola, {user.displayName} </p>
                         : <p> Por favor, registrese </p>
                }
                {
                    user ? <button onClick={signOut}> Desconectar </button>
                         : <button onClick={signInWithGoogle}> Iniciar con Google </button>
                }
            </div>
        );
    }

}
const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProviders : new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(login);