import React from 'react';
import {Card} from './Card';


export const CardList = (props) => {
    let shortid = require('shortid');
    const cards = props.robots.map((value,index) => <Card key={shortid.generate()}  data={value}/>);
    return(
        <div>
            {cards}
        </div>
    );
}
 