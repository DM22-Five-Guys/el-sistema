import axios from 'axios';
const TEST = 'TEST';
const LOGIN = 'LOGIN';
const FIRST_LOGIN = 'FIRST_LOGIN';

let initialState = {
    first_login: false,
    user: {}
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
            return response.data
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
            console.log(action.payload)
            return Object.assign({}, state, {first_login: action.payload.firstLogin});
        case FIRST_LOGIN:
            return Object.assign({}, state, {user: action.payload.user});
        default:
            return state;
    }
}

