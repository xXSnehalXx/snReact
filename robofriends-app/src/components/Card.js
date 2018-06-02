import React from 'react';
import 'shortid';
const Card  = (props) => {
    const {id,username,name,email,} = props.data;
    return (
        <div className = "bg-light-blue tc br3 pa2 dib ma2 grow shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt={username}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export {Card};