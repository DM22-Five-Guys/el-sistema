import axios from 'axios';

export default function setAuthorizationToken(token){
    if(token){
        //axios.defaults.headers.get['Authorization'] = token;
        axios.defaults.headers.common['Authorization'] = token;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
    } else {
        //delete axios.defaults.headers.get['Authorization'];
        delete axios.defaults.headers.common['Authorization']
    }
}