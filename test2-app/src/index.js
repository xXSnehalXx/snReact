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
                {/* using ()=>this.handleClick() sometimes generates different callbacks whihc is a problem if this is sent as a
                props to lower component */}

                {/*SO use class fields syntax handleClick = () => {..} or else binding in contructor this.handleClick = this.handleClick.bind(this);*/}
            </div>
        );
    }
}




ReactDOM.render(
<LoggingButton />,
document.getElementById('root')
);