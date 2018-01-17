import axios from 'axios';

const SUBSCRIBE = 'SUBSCRIBE';

let initialState = {
    notification: null
}

export function subscribe(info) {
    let body = {};
    body.number =  info.number;
    body.subscriptions = info.subscriptions;

    let data = axios.post('http://localhost:8080/subscribe', body);

    return {
        type: SUBSCRIBE,
        payload: data
    }
}

export default function subscribeReducer(state = initialState, action ){
    switch(action.type){
        case SUBSCRIBE:
            // console.log(action.payload);
            return state
        default:
            return state;
    }
}