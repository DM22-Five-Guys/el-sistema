import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './users.reducer';
import BlogReducer from './blog.reducer';

const rootReducer = combineReducers({
    user: UserReducer,
    blog: BlogReducer,
    form: formReducer
})

export default rootReducer;