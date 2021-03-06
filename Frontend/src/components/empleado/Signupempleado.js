import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import Alert from '../Alert';

const MyLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
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

const SignUp = (props) => {
  const classes = useStyles();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
    servicio: '',
    celular:'',
  });

  const [alertMessage, setAlertMessage] = useState(null);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlertMessage(null);
  
    //Create user with enamil and password
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(response => {
      // guardar los datos del usuario
      delete user.password;
      firebase.database().ref(`/users/${response.user.uid}`).set(user);
      //alert('Bienvenido a Chat App');
      setAlertMessage({
        type: 'success',
        message: 'Bienvenido a BeautyServices'
      });
      props.history.push('/inicioEmpleado');
    })
    .catch(error => {
      console.log(error);
      //alert(error.message);
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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nombre Completo"
                autoFocus
                value={user.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="avatar"
                label="URL avatar (opcional)"
                name="avatar"
                value={user.avatar}
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
                type="email"
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
              <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="servicio"
                variant="outlined"
                required
                fullWidth
                type="servicio"
                id="servicio"
                label="Servicio"
                autoFocus
                value={user.servicio}
                onChange={handleChange}
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="celular"
                variant="outlined"
                required
                fullWidth
                type="celular"
                id="celular"
                label="Celular"
                autoFocus
                value={user.celular}
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
              <Link to="/loginEmpleado" component={MyLink} variant="body2">
                {"¿Ya tienes una cuenta? Ingresa aquí"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {alertMessage && 
        <Alert
          type={alertMessage.type}
          message={alertMessage.message}
          autoclose={5000}
        />
      }
    </Container>
  );
};
export default withRouter(SignUp);