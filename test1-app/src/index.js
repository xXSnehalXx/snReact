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
        this.timerId = setInterval(() =>{
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
        let x = `The time is ${this.state.date.toLocaleTimeString()}`;
        return(
            <div>
                <h1>The time</h1>
                {/* to insert js inside html in react uve to write inside {} */}
                <h2> the time is {this.state.date.toLocaleTimeString()}</h2>
                <h2>{x}</h2>
            </div> 
        );
    };
}
let clock = <Clock/>;
ReactDOM.render(
    clock,
    document.getElementById('root')
);