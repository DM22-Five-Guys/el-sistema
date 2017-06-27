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





// import getToken from './components/admin-side/login-page/token.service';
// import setAuthorizationToken from './reducers/utils/setAuthorizationToken';


// import requireAuth from './components/admin-side/login-page/AuthenticatedRoute';

// import New_Test from './components/admin-side/login-page/new_test.component';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>

, document.getElementById('root'));
//registerServiceWorker();




/*<BrowserRouter>
            <div>
                <Route exact path='/' component={App}></Route>
                <Route path="/login" component={ Login }></Route>
                <Route path="/first-login" component={firstLogin}></Route>
                <Route path="/test" component={requireAuth(testAuth)}></Route>
                <Route path="/register" component={requireAuth(RegisterUserForm)}/>
                 <Route path="/new-test" component={New_Test}/>
            </div> 
</BrowserRouter>*/