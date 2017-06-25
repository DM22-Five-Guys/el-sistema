import axios from 'axios';
const TEST = 'TEST';
const LOGIN = 'LOGIN';
const FIRST_LOGIN = 'FIRST_LOGIN';

let initialState = {
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


export function logout(){
    initialState.isLoggedIn = false;
    initialState.user = null;
    initialState.token = null;
    localStorage.clear();
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


        // if(data.success){
        //     return {
        //         type: LOGIN,
        //         payload: data
        //     }
        // }
        // else{
        //     return {
        //         type: LOGIN1,
        //         payload: data
        //     }
        // }
         

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
            console.log('login ',action.payload)
            storeUserData(action.payload.token, action.payload.user);
            return Object.assign({}, state, {first_login: action.payload.firstLogin, token: action.payload.token, user: action.payload.user});
        case FIRST_LOGIN:
            return Object.assign({}, state, {user: action.payload.user});
        default:
            return state;
    }
}

