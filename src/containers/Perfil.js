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

import Loginn from './copy/Loginn';

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
  space: {
    marginTop:'10px'
  }
}));


const Perfil = (props) => {

  const classes = useStyles();

  const [user, setUser] = useState({
    name:'',
    apellido:'',
    email:'',
 });

 const [alertMessage, setAlertMessage ] = useState(null);


 const handleChange = (e) => {
  setUser({
    ...user,
    [e.target.name]: e.target.value
  })
};

const handleSubmit = (e) =>{
  e.preventDefault();

  setAlertMessage(null);
  const { currentUser } = firebase.auth();
  firebase.database().ref(`/users/${currentUser.uid}`)
  .update(user)
  .then(response => {
    setAlertMessage({type: 'succes', text: 'Perfil actualizado'});
  })
  .catch(error =>{
    setAlertMessage({type: 'error', text: error.message});
  });

  
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
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid alignItems="center" container justify="center" direction="column">
            <Loginn/>
            <span className={classes.space}></span>
          </Grid>
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
            Guardar Perfil
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/InicioPerfil" component={MyLink} variant="body2">
              {"Ir al Inicio" }
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

export default withRouter (Perfil);
