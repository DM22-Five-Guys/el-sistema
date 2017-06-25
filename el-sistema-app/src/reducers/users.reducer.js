import axios from 'axios';
import setAuthorizationToken from './utils/setAuthorizationToken';
const TEST = 'TEST';
const LOGIN = 'LOGIN';
const FIRST_LOGIN = 'FIRST_LOGIN';
const LOGOUT = 'LOGOUT';

let initialState = {
    isLoggedIn: false,
    first_login: false,
    token: null,
    user: {}
}

//localStorage.setItem('name', 'phillip');
function storeUserData(token,user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    // initialState.user = user;
    // initialState.token = token;

}

export function loadToken(){
    let token = localStorage.getItem('id_token');
    return token;
}

function clearLocalStorage(){
    localStorage.clear();
}

export function logout(){
    // initialState.isLoggedIn = false;
    // initialState.user = null;
    // initialState.token = null;
    return {
        type: LOGOUT,
        payload: {isLoggedIn: false, user:{}, token:null}
    }
    //window.location = '/login';
    
}

export function simpleTest(){
    return {
        type: TEST,
        payload: 'working'
    }
}

// after user/volunteer has been registered by admin they will need to login with the default password.
export function login(user){
    const userInfo = user
    let data = axios.post('http://localhost:3001/login', userInfo)
        .then(response => {
            //console.log(response.data)
            return response.data;
       
    })

            return {
                type: LOGIN,
                payload: data
            }
}
         

// after fist successful login user will be redirected to a new form where they will create their own password.
export function firstLogin(user){
    const userInfo = user;
    let data = axios.post('http://localhost:3001/update-password', userInfo)
        .then(response => {
            return response.data
        })
    return {
        type: FIRST_LOGIN,
        payload: data
    }
}
export default function UserReducer(state = initialState, action ){
    switch(action.type){
        case LOGIN:
            //console.log('login ',action.payload)
            storeUserData(action.payload.token, action.payload.user);
            if(action.payload.isLoggedIn){
                setAuthorizationToken(loadToken());
            }
            return Object.assign({}, state, {isLoggedIn:action.payload.isLoggedIn, first_login: action.payload.firstLogin, token: action.payload.token, user: action.payload.user});
        case FIRST_LOGIN:
            return Object.assign({}, state, {user: action.payload.user});

        case LOGOUT:
            clearLocalStorage();
            console.log(action.payload);
            return Object.assign({},state, action.payload);
        default:
            return state;
    }
}

