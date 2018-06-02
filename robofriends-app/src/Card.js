import React from 'react';
import 'shortid';
import './index.js'; 

const Card  = (props) => {
    return (
        <div className = "bg-light-blue tc br3 pa2 dib ma2 grow shadow-5">
            <img src={`https://robohash.org/${props.data.id}?200x200`} alt={props.data.username}/>
            <div>
                <h2>{props.data.name}</h2>
                <p>{props.data.email}</p>
            </div>
        </div>
    );
}
export {Card};