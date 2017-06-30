import axios from 'axios'

const DONATE = 'DONATE';

const initialState = {}

export function donate(payment){
let data = axios.post('http://localhost:3001/donate',payment)
    .then(response => response)
    .catch(error => error)


    return {
        type: DONATE,
        payload: data
    }
}

export default function donateReducer(state = initialState, action){
    switch(action.type){
        case DONATE:
            return Object.assign({}, state, action.payload)
        default:
            return state;
    }
}