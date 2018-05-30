import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./css/bootstrap.min.css";

class Shop extends React.Component{

render(){
    return(
        <div className="shopping-list">
            <h1>Shopping List for Customer #{this.props.name}</h1>
            <ul>
                <li>PalNesto</li>
                <li>Facebook</li>
                <li>Instagram</li>
            </ul>
            {getGreeting(data)}
            <img src={data.imgUrl} alt="400x200"/>
            {element1}
        </div>       
    );
};  

}

const element = ( 
<h1 className="header1">
    Hi this is a react element
</h1>
);

const element1 =React.createElement(
    'h1',
    {className:'header1'},
    'Hi this is a react element'
);

const di = (
    <div>
        <h1>X x X x X</h1>
        <h2>Y y Y y Y</h2>
    </div> 
);

function getGreeting(user){
    if(user)
        return (<h2>Hey {formatUser(user)}</h2>);
    else
        return (<h2>Hey Default Muhfo!</h2>);
}

const data = {
    firstname : "Snehal",
    lastname  : "Machan",
    imgUrl    : "https://placehold.it/400x200",
}

function formatUser(user){
    return(
        user.firstname+" "+user.lastname
    );
}

//ALTERNATIVE 1
// class PrintTimes extends React.Component{
    
//     constructor(props){
//         super(props);
//     }
//     render(){
//         var count  = parseInt(this.props.num);
//         const moves = Array(count).fill(null).map((value,i)=>{
            
//             return (
//                 <li>
//                     Step #{i}
//                 </li>
//             );
//         });
        
//         const element = <li>This is {this.props.name}</li>;
//         moves.push(element);
        
//         return(
//           <ol>{moves}</ol>
//         );
//     };
// }

//ALTERNATIVE 2
// class PrintTimes extends React.Component{
    
//     constructor(props){
//         super(props);
//     }
//     render(){
    
//         return(
//           <ul id="l">
//               {
//                   Array(parseInt(this.props.num)).fill(null).map((value,i)=>{
//                       return(
//                           <li id="m">The Step #{i}</li>
//                       );
//                   })
//               }
//               <li id="m">The name is {this.props.name}</li>
//           </ul>
//         );
//     };
// }
//ALTERNATIVE 3

function PrintTimes(props){
    var arr = Array(parseInt(props.num)).fill(null);
    return(
        <ol id="l">
            {
               Array(parseInt(props.num)).fill(null).map((value,i)=>{
                    return(
                    <li id="m">{props.name} is the person</li>             
                   );
                }) 
            }
            
        </ol>
    );
}

const print = <PrintTimes num="10" name="ReactJS"/>;

function Test(){
    return(

        <div className="col-lg-12 col-md-12 row">
            <div className="col-lg-4 col-md-4">
                <PrintTimes num="4" name="Snehal"/>
            </div>
            <div className="col-lg-4 col-md-4">        
                <PrintTimes num="5" name="Jyothi"/>
            </div>
            <div className="col-lg-4 col-md-4">
                <PrintTimes num="6" name="Gucci Mane"/>
            </div>
        </div>
    
    );
}
const test = <Test/>;
//for loop cant be implemented directly in react but by creating a null array of a length
// and using map function and using second parameter index for looping
ReactDOM.render(
    test,
    document.getElementById('root')
);
