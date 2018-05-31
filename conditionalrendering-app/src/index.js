import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//this is a stateful component

// const UserGreeting = () => {
//     return <h1>HELLO USER!</h1>;
// }

// const GuestGreeting = () => {
//     return <h1>Guest please login!</h1>;
// }

// const LoginButt = (props) => {
//     return <button onClick={props.onClick}>Login</button>
// }

// const LogoutButt = (props) => {
//     return <button onClick={props.onClick}>Logout</button>
// }

// class LoginControl extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isLoggedOn:false,
//         };   
//     }

//     handleLoginClick = () => {
//         this.setState({isLoggedOn:true});
//     }

//     handleLogoutClick = () => {
//         this.setState({isLoggedOn:false});
//     }

//     render(){
//     const greeting = this.state.isLoggedOn? (<UserGreeting/>) : (<GuestGreeting/>);
//     const button  = this.state.isLoggedOn? (<LogoutButt onClick = {this.handleLogoutClick}/>) : (<LoginButt onClick={this.handleLoginClick}/>);
         
//         return(
//             <div>
//                 {greeting}
//                 {button}
//             </div>
//         );
//     }
// }


// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// );


function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
         ( <h2>
            You have {unreadMessages.length} unread messages.
          </h2>,
          unreadMessages.map((value,index)=><h3 key={index}>{value}</h3>)
          //for each h3 which gets displays all the messages ,it must have a key attribute set to a unique key prop like index like key={index}
          //for react to change components swiftly
         )
        }
      </div>
    );
  }
  
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('root')
  );