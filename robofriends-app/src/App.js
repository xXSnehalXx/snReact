import React,{Component} from 'react';
import {CardList} from './CardList';
import {SearchBox} from './SearchBox';
import {Scroll} from './Scroll.js';
import './App.css';

export default class App extends Component {
   constructor(props){
       super(props);
       this.state = {
           robots : [],
           searchField:''
       };
    }
   onSearchChange=(event)=>{
    this.setState({
        searchField:event.target.value
    });
   }
   componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
   }
    render(){
        const filteredRobots = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        if(this.state.robots.length === 0){
            return  <h1>Loading...</h1>;
        }else{
            return(
                <div className="tc">
                    <h1>ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }   
    }
}

