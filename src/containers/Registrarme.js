import React, { useState } from 'react';

import { FcGoogle } from "react-icons/fc";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Alert from './Alert';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const MyLink = React.forwardRef((props, ref) => (<RouterLink innerRef={ref} {...props} /> ));

const useStyles = makeStyles((theme) => ({
  '@global': {
     body:{
        backgroundColor: theme.palette.common.white,
     },
  },
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Registrarme = (props) => {
  const classes = useStyles();

  const [user, setUser] = useState({
     name: '',
     apellido: '',
     email:'',
     password:'',
  });

 const [alertMessage, setAlertMessage ] = useState(null);

 const handleChange = (e) => {
     setUser({
       ...user,
       [e.target.name]: e.target.value
     })
 };


 //Create user with GOOGLE
 const LoginGoogle = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
   .then(response =>{
      //Guardar los datos del usuario
      firebase.database().ref(`/users/${response.user.uid}`).set(user);
      //Alert Mensaje
        setAlertMessage({
          type: 'succes',
          message: 'Bienvenido a BeautyServices'
        });
      props.history.push('/InicioPerfil');
  }).catch (error =>{
      console.log(error);
      setAlertMessage({
        type: 'error',
        message: error.message
      });
  })
 };


 //Create User with email and password
 const handleSubmit = (e) =>{
   e.preventDefault();
   setAlertMessage(null);
   firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then((response) => {
        //Guardar los datos del usuario
        delete user.password;
        firebase.database().ref(`/users/${response.user.uid}`).set(user);
        //Alert Mensaje
        setAlertMessage({
          type: 'succes',
          message: 'Bienvenido a BeautyServices'
        });
        props.history.push('/InicioPerfil');
    })
      .catch(error => {
        console.log(error);
        setAlertMessage({
          type: 'error',
          message: error.message
        });

      }); 
 };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Registrarme en BeautyServices
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
        <div className="modal-body">
                <form id="registro">
                  <div className="form">
                    <label for="inputEmail">Registro con google</label>
                    <Button fullWidth variant="outlined" size="large" onClick={LoginGoogle}> <div className="mr-1"> <FcGoogle /> </div> Registrarme con Google</Button>
                  </div>
                </form>
              </div>
  <hr/>  
         <h5> Formulario Registro </h5>          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nombre"
                autoFocus
                value={user.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="apellido"
                label="Apellido"
                name="apellido"
                autoComplete="lname"
                value={user.apellido}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo"
                name="email"
                autoComplete="email"
                value={user.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={user.password}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarme
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/IniciarSesion" component={MyLink} variant="body2">
              {" ¿Ya tienes una cuenta? Ingresa aqui" }
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {alertMessage && 
         <Alert type={alertMessage.type} message={alertMessage.message} autoclose={3000} />
      }
    </Container>
  );
}

export default withRouter (Registrarme);