import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/admin-side/login-page/Login.component'
import firstLogin from './components/admin-side/login-page/first-login.component';
import './index.css';
import reducers from './reducers';
import promise from 'redux-promise';
// delete after test
import testAuth from './components/admin-side/login-page/testAuth.component';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import App from './components/App';
import { loadToken } from './reducers/users.reducer'
import setAuthorizationToken from './reducers/utils/setAuthorizationToken';
let isAuthenticated = false;
if (localStorage.id_token){
    setAuthorizationToken(loadToken());
    isAuthenticated = true;
}else {
    isAuthenticated = false;
}
console.log(isAuthenticated);
const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={App}></Route>
                <Route path="/login" component={ Login }></Route>
                <Route path="/first-login" component={firstLogin}></Route>
                <Route path="/test" component={isAuthenticated?testAuth:Login}></Route> 
            </div>
        </BrowserRouter>
    </Provider>

, document.getElementById('root'));
registerServiceWorker();