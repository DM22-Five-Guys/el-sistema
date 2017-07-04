import axios from 'axios';
import getToken from './../components/admin-side/components/login-page/token.service';

const SEND_NOTIFICATION = 'SEND_NOTIFICATION';

let initialState = {
    notification: null
}

export function sendNotification(notification) {
     const config = {
        withCredentials: false,
        headers: {'Authorization': getToken()}
    }
    let data = axios.post('http://localhost:8080/sms/bulk/'+notification.type, notification, config);
    // return {
    //     type: SEND_NOTIFICATION,
    //     payload: notification
    // }
}

export default function BlogReducer(state = initialState, action ){
    switch(action.type){
        case SEND_NOTIFICATION:
            console.log(action.payload);
            return state
        default:
            return state;
    }
}