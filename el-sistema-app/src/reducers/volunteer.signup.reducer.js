import axios from 'axios';

const VOLUNTEER_SIGNUP = 'VOLUNTEER_SIGNUP';

// action creator

export function addVolunteer(volunteer){
    let data = axios.post('http://localhost:8080/volunteer-signup', volunteer)
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(err => { console.log(err)})
        return {
            type: VOLUNTEER_SIGNUP,
            payload: data
        }
}


// reducer

export default function VolunteerSignupReducer(state = null, action){
    switch(action.type){
        case VOLUNTEER_SIGNUP:
            return action.payload;
        default:
            return state;
    }
}