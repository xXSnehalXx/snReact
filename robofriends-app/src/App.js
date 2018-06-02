import React,{Component} from 'react';
import {CardList} from './CardList';
import {SearchBox} from './SearchBox';
import {robots} from './robots';

export default class App extends Component {
   constructor(props){
       super(props);
       this.state = {
           robots : robots,
           searchField:''
       };
    }
   onSearchChange(event){
    console.log(event.target.value);
   }
    render(){
        return(
        <div className="tc">
            <h1>ROBOFRIENDS</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={this.state.robots}/>
        </div>
        );
    }
}

