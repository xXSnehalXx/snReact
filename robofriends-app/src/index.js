import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from './Card.js';
import 'tachyons';
import {robots} from './robots.js';

class App extends React.Component{
    render(){
        let shortid = require('shortid');
        const cards = robots.map((value,index) => <Card key={shortid.generate()}  data={value}/>);
        return(
            <div>
                {cards}
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);