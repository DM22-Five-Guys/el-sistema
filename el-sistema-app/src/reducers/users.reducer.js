import axios from 'axios';
const TEST = 'TEST';
const LOGIN = 'LOGIN';
const FIRST_LOGIN = 'FIRST_LOGIN';

let initialState = {
    first_login: false
}

export function simpleTest(){
    return {
        type: TEST,
        payload: 'working'
    }
}


export function login(user){
    const userInfo = user
    let data = axios.post('http://localhost:3001/login', userInfo)
        .then(response => {
            console.log(response.data)
            return response.data
        })
           
    return {
        type: LOGIN,
        payload: data
    }
}
export function firstLogin(user){
    const userInfo = user;
    let data = axios.post('http://localhost:3001/login', userInfo)
    return {
        type: FIRST_LOGIN,
        payload: data
    }
}
export default function UserReducer(state = initialState, action ){
    switch(action.type){
        case LOGIN+ "_FULFILLED":
            //console.log('action.payload', action.payload);
            return Object.assign({}, state, {first_login: action.payload});
        default:
            return state;
    }

}

