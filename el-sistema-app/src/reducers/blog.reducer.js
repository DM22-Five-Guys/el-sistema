import axios from 'axios';
import getToken from './../components/admin-side/components/login-page/token.service';

const ADD_BLOG = 'ADD_BLOG';

let initialState = {
    addBlogPic1: null,
    addBlogPic2: null
}

export function addBlog(blog) {
     const config = {
        withCredentials: false,
        headers: {'Authorization': getToken()}
    }
    let data = axios.post('http://localhost:3001/blog/add', blog, config);
    return {
        type: ADD_BLOG,
        payload: blog
    }
}

export default function BlogReducer(state = initialState, action ){
    switch(action.type){
        case ADD_BLOG:
            console.log(action.payload);
            return state
        default:
            return state;
    }
}