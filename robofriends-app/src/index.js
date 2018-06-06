
import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import App from './containers/App.js';
import {createLogger} from 'redux-logger';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import './index.css';
import { searchRobots,requestRobots } from './reducers.js';
import thunkMiddleware from 'redux-thunk';
//thunk waits checks if any actions return any function instead of any object
//remove applyMiddleware(logger) from createStore and but below for using redux dev tools
//,/*preloaded state*/window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const logger = createLogger();
//STEP 5 REDUX 
const rootReducer = combineReducers({ searchRobots,requestRobots });
const stores = createStore(rootReducer,applyMiddleware(logger)) ;
//use provider to pass down store as props 
ReactDOM.render(
    <Provider store={stores} >
         <App />
    </Provider>,
    document.getElementById('root')
);