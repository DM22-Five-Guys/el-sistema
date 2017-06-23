import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/admin-side/login-page/Login.component'
import firstLogin from './components/admin-side/login-page/first-login.component';
import './index.css';
import reducers from './reducers';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import App from './components/App';

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={App}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/first-login" component={firstLogin}></Route>
            </div>
        </BrowserRouter>
    </Provider>

, document.getElementById('root'));
registerServiceWorker();