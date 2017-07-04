import axios from 'axios'

const COMPLETE_CHECKOUT = 'COMPLETE_CHECKOUT';

const initialState = {}




export function completeCheckout(payment){

let data = axios.post('http://localhost:8080/donate', payment)
    .then(response => response)
    .catch(error => error)

    return{
        type: COMPLETE_CHECKOUT,
        payload: data
    }
}

export default function donateReducer(state = initialState, action){
    switch(action.type){
        case COMPLETE_CHECKOUT:
            console.log(action.payload);
            return Object.assign({}, state, action.payload)
        default:
            return state;
    }
}