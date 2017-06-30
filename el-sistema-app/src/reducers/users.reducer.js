import axios from 'axios';
import setAuthorizationToken from './../components/admin-side/components/login-page/utils/setAuthorizationToken';
import getToken from './../components/admin-side/components/login-page/token.service';
const TEST = 'TEST';
const LOGIN = 'LOGIN';
const FIRST_LOGIN = 'FIRST_LOGIN';
const LOGOUT = 'LOGOUT';
const REGISTER = 'REGISTER';
const NEW_TEST = 'NEW_TEST';

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



function clearLocalStorage(){
    localStorage.clear();
}

export function logout(){
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
    const config = {
        withCredentials: false
    }
    let data = axios.post('http://localhost:3001/login', userInfo, config)
        .then(response => {
            //console.log(response.data)
            return response.data;
       
    })

            return {
                type: LOGIN,
                payload: data
            }
}

export function register(user){
    console.log('register function from users.reducer ',user);
    const userInfo = user
    const config = {
        withCredentials: false,
        headers: {'Authorization': getToken()}
    }
    let data = axios.post('http://localhost:3001/register', userInfo, config)
        .then(response => {
            return response.data;
        })
        return {
            type: REGISTER,
            payload: data
        }
}
         

// after fist successful login user will be redirected to a new form where they will create their own password.
export function firstLogin(user){
    const userInfo = user;
    let data = axios.post('http://localhost:3001/update-password', userInfo)
        .then(response => {
            return response.data
        }).catch(error => console.log(error));
    return {
        type: FIRST_LOGIN,
        payload: data
    }
}


// export function new_test_func(){
//     let data = axios.post('http://localhost:3001/new-test')
//         .then(response => response).catch(error => error)
//     return {
//         type: NEW_TEST,
//         payload: data
//     }
// }

export default function UserReducer(state = initialState, action ){
    switch(action.type){

        case NEW_TEST:
            console.log(action.payload);
            return state
        case LOGIN:
            //console.log('login ',action.payload)
            storeUserData(action.payload.token, action.payload.user);
            if(action.payload.isLoggedIn){
                setAuthorizationToken(getToken());
            }
            return Object.assign({}, state, {isLoggedIn:action.payload.isLoggedIn, first_login: action.payload.firstLogin, token: action.payload.token, user: action.payload.user});
        case FIRST_LOGIN:
            console.log(action.payload)
            return Object.assign({}, state, {isLoggedIn:action.payload.isLoggedIn, first_login: action.payload.firstLogin, token: action.payload.token, user: action.payload.user});
        case REGISTER:
            //console.log(action.payload)
            return Object.assign({}, state, action.payload);
        case LOGOUT:
            clearLocalStorage();
            //console.log(action.payload);
            return Object.assign({},state, action.payload);
        default:
            return state;
    }
}

