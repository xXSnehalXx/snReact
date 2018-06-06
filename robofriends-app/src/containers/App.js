import React,{Component} from 'react';
import {connect} from 'react-redux';
import {CardList} from '../components/CardList';
import {SearchBox} from '../components/SearchBox';
import {Scroll} from '../components/Scroll.js';
import {ErrorBoundary} from '../components/ErrorBoundary';
import {setSearchField} from '../actions.js'
import './App.css';

//STEP 6 REDUX
const mapStateToProps = state => ({searchField:state.searchField})

const mapDispatchToProps = (dispatch) => ({onSearchChange:(event)=>dispatch(setSearchField(event.target.value))});

class App extends Component {
   constructor(props){
       super(props);
       this.state = {
           robots : [] 
       };
    }
   componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
   }
    render(){
        const { robots } = this.state;
        const { searchField , onSearchChange }  = this.props;
        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length?
            <h1>Loading...</h1>
        :
            (
                <div className="tc">
                    <h1>ROBOFRIENDS</h1>
                    <SearchBox onSearchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                             <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}
//STEP 7 REDUX
export default connect(mapStateToProps,mapDispatchToProps)(App) ;
