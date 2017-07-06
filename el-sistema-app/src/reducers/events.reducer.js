// import _ from 'lodash'
import {GET_EVENTS} from '../actions'

export default function(state = {}, action){
    switch (action.type){
        case GET_EVENTS:
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}