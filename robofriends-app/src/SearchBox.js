import React from 'react';

export const SearchBox = ({searchChange}) => {
    return(
        <div className="pa2">
            <input 
            className = "pa3 ba b--green bg-light-green"
            type="search"
            placeholder="Enter Name"
            onChange={searchChange}
            />
        </div>
        

    );
}