import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LoggingButton extends React.Component {
    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        let ex = 'Snehal';
        console.log(`${ex} is in  -> `,this);
    }

    render(){
        return(
            
            <div>
                <button onClick={() => this.handleClick()} >Click to see enironment</button>
            </div>
        );
    }
}




ReactDOM.render(
<LoggingButton />,
document.getElementById('root')
);