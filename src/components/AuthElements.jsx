import React from 'react'; 

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { FcGoogle } from "react-icons/fc";

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu'
import Fade from '@material-ui/core/Fade';


const AuthElements =  function (props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
     const handleClose = () => {
       setAnchorEl(null);
    };

    const loginButton = () => {
        if (props.user) return (
            [<Avatar src={props.user.providerData[0].photoURL} onClick={handleMenu} aria-controls="fade-menu" aria-haspopup="true" /> ]
        );
        return <Button fullWidth variant="outlined" size="large" onClick={props.login}> <div className="mr-1"> <FcGoogle /> </div> Iniciar con Google</Button>
    }
        return ( 
            <div>
                {loginButton()}
                <Menu
                  id="fade-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}> <Link to="/Perfil"> Perfil </Link> </MenuItem>
                </Menu>      
            </div>
        );
}

export default (AuthElements);