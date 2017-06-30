import axios from 'axios'

export const GET_EVENTS = 'get_events'

const ROOT_URL = 'http://localhost:8080/'

export function getAllEvents(){
    const request = axios.get(`${ROOT_URL}api/events/`).then(response => {
        return response.data
    })
    
    console.log(request)
    
    return {
        type: GET_EVENTS,
        payload: request
    }
}