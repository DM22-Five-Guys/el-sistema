import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './users.reducer';
import DonateReducer from './donate.reducer';

const rootReducer = combineReducers({
    user: UserReducer,
    form: formReducer,
    donate: DonateReducer
})

export default rootReducer;