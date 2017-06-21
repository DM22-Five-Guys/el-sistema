import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import reducers from './reducers';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import App from './components/App';

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>

, document.getElementById('root'));
registerServiceWorker();