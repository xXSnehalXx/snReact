import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from './Card.js';
import 'tachyons';
import 'shortid';
import {robots} from './robots.js';

class App extends React.Component{
    render(){
        const cards = robots.map((value,index) => (<Card key={shortid.generate()}  data={value}/>) );
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