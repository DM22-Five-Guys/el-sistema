import axios from 'axios';
import getToken from './../components/admin-side/components/login-page/token.service';

const SEND_NOTIFICATION = 'SEND_NOTIFICATION';

let initialState = {
    notification: null
}

export function sendNotification(notification) {
    console.log("-------Check here-------");
    let body = {};
    body.list = notification.type;
    body.message = notification.message;
    console.log(body);
     const config = {
        withCredentials: false,
        headers: {'Authorization': getToken()}
    }
    let data = axios.post('http://localhost:8080/sms/bulk', body, config);
    console.log(data);
    return {
        type: SEND_NOTIFICATION,
        payload: notification
    }
}

export default function notifyReducer(state = initialState, action ){
    switch(action.type){
        case SEND_NOTIFICATION:
            // console.log(action.payload);
            return state
        default:
            return state;
    }
}