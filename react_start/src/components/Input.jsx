import React, { useState } from 'react'

function Input() {
    let[text,statetext]=useState("")
    let[age,stateage]=useState(0);
    function handleText(e)
    {
        statetext(text=e.target.value);
       
    }
    return (
    <div>
        <input type='text' name='name' placeholder='Enter your name' onChange={handleText}/>
        <input  type='number'name='age' placeholder='Enter your age' onChange={(e)=>{
stateage(age=e.target.value);
        }}/>
        <p>Your name:{text} <br /> your age:{age}</p>
    </div>
  )
}

export default Input
// mount update demount