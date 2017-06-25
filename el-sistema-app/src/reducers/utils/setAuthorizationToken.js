import axios from 'axios';

export default function setAuthorizationToken(token){
    if(token){
        axios.defaults.headers.get['Authorization'] = token;
    }else {
        delete axios.defaults.headers.get['Authorization'];
    }
}