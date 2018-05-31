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
    const messages = ['React', 'Re: React', 'Re:Re: React'];
    const isLoggedOn = this.state.isLoggedOn;
    const greeting = isLoggedOn ? (<UserGreeting/>) : (<GuestGreeting/>);
    const button   = isLoggedOn ? (<LogoutButt onClick = {this.handleLogoutClick}/>) : (<LoginButt onClick={this.handleLoginClick}/>);
    const message = isLoggedOn ? (<Mailbox unreadMessages={messages}/>):null;
        return(
            <div>
                {greeting}
                {button}
                {message}
            </div>
        );
    }
}

function Mailbox(props) {
    let shortid = require('shortid');//as keys of list have to be unique ,use this module to 
    //to generate random shortid's
    const unreadMessages = props.unreadMessages;
    return (
        <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
            ( <h2>
            You have {unreadMessages.length} unread messages.
            </h2>,
            unreadMessages.map((value,index)=><h3 key={shortid.generate()}>{value}</h3>)
            //for each h3 which gets displays all the messages ,it must have a key attribute set to a unique key prop like index like key={index}
            //for react to change components swiftly
            //when u call a component/functional component , to prevents its execution return null from the function
            )
        }
        </div>
    );
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);




  