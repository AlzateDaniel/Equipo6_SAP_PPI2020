import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Alert from './Alert';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import Login from './Login';

const MyLink = React.forwardRef((props, ref) => (<RouterLink innerRef={ref} {...props} /> ));

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Perfil = (props) => {

  const classes = useStyles();

  const [user, setUser] = useState({
    email:'',
    password:''
 });

 const [errorMessage, setErrorMessage ] = useState('');

 const handleChange = (e) => {
  setUser({
    ...user,
    [e.target.name]: e.target.value
  })
};

const handleLogin = (e) =>{
  e.preventDefault();
  setErrorMessage('');

  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then(() => {
    props.history.push('/InicioPerfil');
  })
  .catch (error => {
    console.log(error);
    setErrorMessage(error.message);
  })
};

useEffect(() => { 
  if (firebase.auth().currentUser){
    //Leer Datos
    firebase.database()
    .ref(`/users/${firebase.auth().currentUser.uid}`)
    .once('value')
    .then(snapshot => {
      setUser(snapshot.val());
    });
  } else {
    props.history.push('/IniciarSesion');
  }
}, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
           Mi Perfil
        </Typography>
        <form className={classes.form} onSubmit={handleLogin}>
          <Grid container justify="center" alignItems="center" direction="column"> 
             <Login/>
          </Grid>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo"
            name="email"
            autoComplete="email"
            autoFocus
            defaultValue={user.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            defaultValue={user.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ingresar
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/Registrarme" component={MyLink} variant="body2">
                {"¿No tienes una cuenta? ingresa aqui" }
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {errorMessage && 
      <Alert type="error" message={errorMessage} autoclose={3000} />
      }
    </Container>
  );
}

export default withRouter (Perfil);
