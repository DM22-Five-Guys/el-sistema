import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './users.reducer';
import BlogReducer from './blog.reducer';
import EventsReducer from './events.reducer';

const rootReducer = combineReducers({
    user: UserReducer,
    blog: BlogReducer,
    form: formReducer,
    events: EventsReducer,
})

export default rootReducer;