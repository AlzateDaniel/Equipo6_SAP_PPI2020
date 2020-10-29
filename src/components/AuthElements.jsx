import React from 'react'; 

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { FcGoogle } from "react-icons/fc";


const AuthElements =  function (props) {

    const loginButton = () => {
        if (props.user) return (
            [<Avatar src={props.user.providerData[0].photoURL}/>]
        );
        return <Button fullWidth variant="outlined" size="large" onClick={props.login}> <div className="mr-1"> <FcGoogle /> </div> Iniciar con Google</Button>
    }
        return ( 
            <div>
                {loginButton()}
            </div>
        );
}

export default (AuthElements);