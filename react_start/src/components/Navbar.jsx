import React from 'react'
import {Link} from 'react-router-dom';
function Navbar(props){
  console.log(props);
    return (
    <div>
      <header>
   <nav className='nav'>
    <img src='logo192.png' height={100} width={100}></img>
     <ul className='navitem'>
       <li>pricing</li>
      <li>about section</li>
       <li>support</li>
       <li>{props.title}</li>
       </ul>
       </nav>
       </header>
   </div>
    )
   }
   function Navbar1()
   {
    return(
      <>
    <Link to="/"><li>Home</li></Link>        
    <Link to="/about"><li>About</li></Link>
      </>
    )
   }
  
   export {Navbar,Navbar1};