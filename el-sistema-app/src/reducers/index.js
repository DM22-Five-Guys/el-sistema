import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './users.reducer';

const rootReducer = combineReducers({
    user: UserReducer, form: formReducer
})

export default rootReducer;