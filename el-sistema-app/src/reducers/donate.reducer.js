import axios from 'axios'

const COMPLETE_CHECKOUT = 'COMPLETE_CHECKOUT';

const initialState = {}




export function completeCheckout(payment){

let data = axios.post('http://localhost:3001/donate', payment)
    .then(response => response)
    .catch(error => error)

    return{
        type: COMPLETE_CHECKOUT,
        payload: data
    }
}




//  function createStripeToken(card){
//             return new Promise((res, rej) => {
//                 Stripe.setPublishableKey('pk_test_nLm9j7f3xI9kKqHVB6YxlEWh')
//                 Stripe.card.createToken(card, (status, response) => {
//                     if(response.error){
//                         rej(response.error)
//                     } else {
//                         res(response.id)
//                     }
//                 })
               
//             })
//         }

// export function completeCheckout(payment){
//     const payload = Scriptly.loadJavascript('https://js.stripe.com/v3/')
//                         .then(() => (createStripeToken(payment)))
//                         .then((token) => (donate(payment, token)))
//     return{
//         type: COMPLETE_CHECKOUT,
//         payload
//     }
// }



export default function donateReducer(state = initialState, action){
    switch(action.type){
        case COMPLETE_CHECKOUT:
            console.log(action.payload);
            return Object.assign({}, state, action.payload)
        default:
            return state;
    }
}