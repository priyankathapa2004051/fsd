import React, { useState } from 'react'
import Img from './Img';
function Toggle() {
   let[istoggled,settogle]=useState(false);
   function IsToggle()
   {
    if(istoggled)
      {
         return(
          <div>
            <img src="./rock2.png" alt="" />
          </div>
         )
      }
      else
      {
        return(
          <></>
        )
      }
   }
   
  return (
    <div>
      <IsToggle/>
    <button className="togglebtn" onClick={()=>{settogle(!istoggled)}}>{istoggled?'hide':'show'} </button>

</div>
  )
}

export default Toggle