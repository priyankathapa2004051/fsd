import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
 import Navbar from './components/Navbar';
  import './style.css';
 import App from './components/App';

 
// // var name1=prompt("enter name")
// // curly braces helps to write javascript in react and to write javascrpit in html
// let h1=<h1>hello {name1.toUpperCase()}</h1>
// html should be wrap up in single tag
// let ele=(
//     <div>
//         <p>
//             hello 
//         </p>
//         <p>
//             mitrroo
//         </p>
//     </div>
// )
// let ele=<p>namaste<p>mitro!</p></p>
// let login=false;
// let naam=prompt("enter ur name")
// let ele=(//throughh paranthesis for better readability
//     <>
//     <div> 
//       <h1> Hello {login?naam:"kon"}</h1>  
//     </div>9
//     </>
//     // {/* </>--- */ jsx fragements as wrapper}
// )
//let naam=prompt("enter name")
// let ele=(
//     <div>
//       {/* <h1 id='he'>  jai shree ram </h1> 
//       we can make attributes dynamic
//       <h2 className={naam}>jai mata di</h2> */}
//     </div>
// )

//eventlistner
// function handleClick()
// {
//     console.log("button click");
// }
// let hehe=(
//     <div>
//         //its syntax is not big
//      <button onClick={handleClick}>Click me</button>
//     </div>
// )
// let hehe=(
//     <div>
//         {/* {[10, 20, 30]};
//         {40}, {79}, {90} */}
//         //arrays ka andar items ko move krana meh jo help krega conditional rendaring krta time 
//         //pta chala konsa key ka stah konsa tag lgana hy kons wala ko render krna hy
//         {[<p key="1">rajma</p>, <p key="2">chawal</p>, <p key="3">chicken</p> ]} 
//     </div>
// )
// let team=['virat','dhoni','bomraha','virat']
// let name=0;
// let element=(
// <div>
//     //map iterate 
//     {team.map(function(item){
//         return <h1 key={name++}>
//         {item}
//     </h1>
//     }
//         )}
// </div>
// )
// function Card()
// {
//     return (
//          <div>
//         <h1>
//          Title
//          </h1>
//          <p>description</p> 
//          </div>
//      )
// }
// let jsx=(
//     <div>
//         <Card/>
//         <Card/>
//         <Card/>
//      </div>
// )
//componenet act as a tag 
 
// let card1=(
//     <div>
//         <Card/>
//         <Card/>
//         <Card/>
//     </div>
// )current file next file./
//export public
//  import Zomato from './components/Zomato';
//  import Counter from './components/Counter';
//  import Counterd from './components/Counterd';
//  import App from './components/App';
 {/* {name?<Zomato naam={name}/>:<p></p>}  */}
          
         {/* <Counter/> */}
      {/* <Counterd/> */}

 function Main() {
    //  let name=prompt("enter your name")
     return(
   <div>
   <BrowserRouter>
      <App/> 
      </BrowserRouter>        
      </div>
     )
 }
// function Crad(props)
// {
//     return(<div>
//     <h1>{props.title}</h1>
//     <p>{props.des}</p>
//     </div>)
// }
// const book=['harry','avenger','junglebook'];
// function App()
// {
//     return(
//         <div>
//             {book.map((book)=>{
//        return <Crad title={book} key={book} des={"ava"}/>
//             })}
//             {/* <Crad title={"jungle book"}/>
//             <Crad title={prompt("enter the title name")}/> */}
//         </div>
//     )
// }
 let rootE=document.getElementById('root');
 //declarative or imperative or what is component 
 //what is virtual dom
ReactDOM.render(<Main/>,rootE);
