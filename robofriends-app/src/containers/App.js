import React,{Component} from 'react';
import {connect} from 'react-redux';
import {CardList} from '../components/CardList';
import {SearchBox} from '../components/SearchBox';
import {Scroll} from '../components/Scroll.js';
import {ErrorBoundary} from '../components/ErrorBoundary';
import {setSearchField, requestRobotsData} from '../actions.js'
import './App.css';

//STEP 6 REDUX
//the below stmnt sets state to props
const mapStateToProps = state => {
    return {
        searchField:state.searchRobots.searchField,
        robots:state.requestRobots.robots,
        isPending:state.requestRobots.isPending,
        error:state.requestRobots.error
    }
};
//the blow  maps dispatchingActions to props so that it can be called
const mapDispatchToProps = dispatch => {
    return {
        onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
        onRequestRobots:()=>dispatch(requestRobotsData())
    }
};

class App extends Component {
//    constructor(props){
//        super(props);
//        this.state = {
//            robots : [] 
//        };
//     }
   componentDidMount(){
       this.props.onRequestRobots();
   }
    render(){
       
        const { searchField , onSearchChange ,robots ,isPending}  = this.props;
        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return isPending?
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
