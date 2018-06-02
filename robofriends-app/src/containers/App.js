import React,{Component} from 'react';
import {CardList} from '../components/CardList';
import {SearchBox} from '../components/SearchBox';
import {Scroll} from '../components/Scroll.js';
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
        const { robots , searchField } = this.state;
        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length?
            <h1>Loading...</h1>
        :
            (
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

