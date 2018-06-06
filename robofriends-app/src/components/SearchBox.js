import React from 'react';
//instead of writin props and the props.onSearchChange
//Use object desconstructing 
export const SearchBox = ({onSearchChange}) => {
    return(
        <div className="pa2">
            <input 
            className = "pa3 ba b--green bg-light-green"
            type="search"
            placeholder="Enter Name"
            onChange={onSearchChange}
            />
        </div>
        

    );
}