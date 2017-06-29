import React from 'react';
import ReactDOM from 'react-dom';
//import registerServiceWorker from './registerServiceWorker';
import './index.css';
import reducers from './reducers';
import promise from 'redux-promise';
import getToken from './components/admin-side/components/login-page/token.service';
import setAuthenticatonToken from './components/admin-side/components/login-page/utils/setAuthorizationToken';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './components/App';

// delete after test

if (localStorage.getItem('token_id')){
    setAuthenticatonToken(getToken());
}



const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>

, document.getElementById('root'));