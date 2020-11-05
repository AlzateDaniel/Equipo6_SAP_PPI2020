import React from 'react'; 

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { FcGoogle } from "react-icons/fc";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const AuthElementss =  function (props) {

  const classes = useStyles();

    const loginButton = () => {
        if (props.user) return (
            [<Avatar src={props.user.providerData[0].photoURL} className={classes.large} /> ]
        );
        return <Button fullWidth variant="outlined" size="large" onClick={props.login}> <div className="mr-1"> <FcGoogle /> </div> Iniciar con Google</Button>
    }
        return ( 
            <div>
                {loginButton()}
            </div>
        );
}

export default (AuthElementss);