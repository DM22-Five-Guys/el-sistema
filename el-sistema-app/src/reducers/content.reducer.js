import axios from 'axios'
import getToken from './../components/admin-side/components/login-page/token.service';
const CREATE_CONTENT = 'CREATE_CONTENT';
const initialState = {}


//action creator
export function createContent(content){
    const config = {
        withCredentials: false,
        headers: {'Authorization': getToken()}
    }
    const data = axios.post('http://localhost:8080/create-content', content)
        .then((content) => content)
        .catch((err) => err)
    return {
        type: CREATE_CONTENT,
        payload: data
    }
}

export default function ContentReducer(state = initialState, action){
    switch(action.type){
        case CREATE_CONTENT:
            return Object.assign({}, state, action.payload)
        default:
            return state
    }
}