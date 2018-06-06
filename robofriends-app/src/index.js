import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import App from './containers/App.js';
import {createLogger} from 'redux-logger';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import './index.css';
import { searchRobots } from './reducers.js';
//,/*preloaded state*/window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const logger = createLogger();
const stores = createStore(searchRobots,applyMiddleware(logger)) ;
//use provider to pass down store as props 
ReactDOM.render(
    <Provider store={stores} >
         <App />
    </Provider>,
    document.getElementById('root')
);