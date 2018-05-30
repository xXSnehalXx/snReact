import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date : new Date(),
        }
    }
    //in react no need to mention function to declare a funciton and no need to declare variable just directly this.varName = ?
    //in setInterval the first parament is handler function in which u have to put the function or something you wanna do inside it only
    componentDidMount(){
        this.timerId = setInterval(() => {
        return this.tick();
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
            date:new Date(),
        });
    }
    
    render(){
        let togg = 0;

        function activateBro(e){
            e.preventDefault();
            alert("nig u clicked it");
        }

        let x = `The time is ${this.state.date.toLocaleTimeString()}`;
        return(
            <div>
                <InfoToDisplay date = {this.state.date}/>
            </div>

        );
    };
}

function InfoToDisplay(props){
    return (//to write multiple htmlm statements in return it must have a single parent element so use a div 
            <h2> the time is {props.date.toLocaleTimeString()}</h2>
    );
}

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isToggleOn:true,
        }
        // this.handleClick = this.handleClick.bind(this);

    }
    handleClick(){
        this.setState(prevState => ({isToggleOn:!prevState.isToggleOn,
        }));
    }
    render(){
        return(
            <button onClick={()=>this.handleClick()}>{this.state.isToggleOn? 'ON' :'OFF'}</button>
        );
    }
}


ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);