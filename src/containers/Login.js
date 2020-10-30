import React, { Component } from 'react';
import firebase from '../initializers/firebase';

import { connect } from 'react-redux';
import { saveToken, clearToken } from '../initializers/actions';
import AuthElements from '../components/AuthElements';


class Login extends Component {
    constructor (props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    componentDidMount () {
        console.log(this.props.token);
    }

    logout () {
        firebase.auth().signOut().then(()=>{
            this.props.clearToken();
        });
    }
    
    render () {
        return ( 
            <div>
               <AuthElements
                 logout= {this.logout}
                 token= {this.props.token}
                 user= {this.props.user}
               />
            </div>
        );
    }
} 

const mapStateToProps = (state) => {
    return {
        token:state.token,
        user:state.user 
    }
}

const mapDispatchToProps = {
    saveToken,
    clearToken
}


export default connect (mapStateToProps,mapDispatchToProps)(Login);