import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import App from './containers/App.js';
import {createLogger} from 'redux-logger';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import './index.css';
import { searchRobots } from './reducers.js';
//remove applyMiddleware(logger) from createStore and but below for using redux dev tools
//,/*preloaded state*/window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const logger = createLogger();
//STEP 5 REDUX
const stores = createStore(searchRobots,applyMiddleware(logger)) ;
//use provider to pass down store as props 
ReactDOM.render(
    <Provider store={stores} >
         <App />
    </Provider>,
    document.getElementById('root')
);