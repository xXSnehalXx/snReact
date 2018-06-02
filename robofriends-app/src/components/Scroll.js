import React from 'react';

export const Scroll = (props) => {
    return(
        <div style={{overflowY:'scroll',border:'2px solid black',height:'600px'}}>
            {props.children}
        </div>
    );
}