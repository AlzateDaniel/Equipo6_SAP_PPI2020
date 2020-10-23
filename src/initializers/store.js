import { createStore, combineReducers, compose } from 'redux';
import persistState from 'redux-localstorage';

function tokenReducers (state='', action){
    switch (action.type) {
        case 'SET_TOKEN':
            return action.token;
        case 'CLEAR-TOKEN':
            return '';   
        default:  
            return state;      
    }
}

function userReducers (state=null, action){
    switch (action.type) {
        case 'LOGGED_IN':
            return action.user;
        case 'LOGGED_OUT':
            return null;   
        default:  
            return state;      
    }
}

let rootReducers = combineReducers({
    token: tokenReducers,
    user: userReducers

});

let mainEnhancer = compose(persistState('token')); 

export default createStore(rootReducers,{},mainEnhancer)