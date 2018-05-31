import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//this is a stateful component

const UserGreeting = () => {
    return <h1>HELLO USER!</h1>;
}

const GuestGreeting = () => {
    return <h1>Guest please login!</h1>;
}

const LoginButt = (props) => {
    return <button onClick={props.onClick}>Login</button>
}

const LogoutButt = (props) => {
    return <button onClick={props.onClick}>Logout</button>
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedOn:false,
        };   
    }

    handleLoginClick = () => {
        this.setState({isLoggedOn:true});
    }

    handleLogoutClick = () => {
        this.setState({isLoggedOn:false});
    }

    render(){
    const greeting = this.state.isLoggedOn? (<UserGreeting/>) : (<GuestGreeting/>);
    const button  = this.state.isLoggedOn? (<LogoutButt onClick = {this.handleLogoutClick}/>) : (<LoginButt onClick={this.handleLoginClick}/>);
         
        return(
            <div>
                {greeting}
                {button}
            </div>
        );
    }
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);


