import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LoggingButton extends React.Component {
    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick (param) {
        console.log(param);
        let ex = 'Snehal';
        console.log(`${ex} is in  -> `,this);
    }

    render(){
        let name = this.props.name;
        return(
            
            <div>
                <button onClick={() => this.handleClick(name)} >Click to see enironment</button>
                {/* using ()=>this.handleClick() sometimes generates different callbacks whihc is a problem if this is sent as a
                props to lower component */}

                {/*SO use class fields syntax handleClick = () => {..} or else binding in contructor this.handleClick = this.handleClick.bind(this);*/}
            </div>

        );
    }
}

class LoggingButton1 extends React.Component {
    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick=  (param)=> {
        console.log(param);
        let ex = 'Snehal';
        console.log(`${ex} is in  -> `,this);
    }

    render(){
        let name = this.props.name;
        return(
            
            <div>
                <button onClick={()=>this.handleClick(name)} >Click to see enironment</button>
                {/* using ()=>this.handleClick() sometimes generates different callbacks whihc is a problem if this is sent as a
                props to lower component SO avoid this*/}

                {/*SO use class fields syntax handleClick = () => {..} or else binding in contructor this.handleClick = this.handleClick.bind(this);*/}

                {/*to send parameter you can use two ways 
                
                1- dont bind in contructor but bind in onClick = this.handleClick.bind(this,prop)
                   the above binds and sends parameter
                2- or use classfields syntax and send param using onClick = {this.handleClick(param)}

                */}
            </div>

        );
    }
}



ReactDOM.render(
<LoggingButton1  name ="snehal"/>,
document.getElementById('root')
);