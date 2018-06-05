import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import App from './containers/App.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import { searchRobots } from './reducers.js';

const store = createStore(searchRobots)  
//use provider to pass down store as props 
ReactDOM.render(
    <Provider store ={store}>
         <App />
    </Provider>,
    document.getElementById('root')
);