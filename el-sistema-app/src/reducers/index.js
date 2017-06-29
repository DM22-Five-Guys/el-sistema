import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './users.reducer';
import EventsReducer from './events.reducer';

const rootReducer = combineReducers({
    user: UserReducer,
    form: formReducer,
    events: EventsReducer
})

export default rootReducer;