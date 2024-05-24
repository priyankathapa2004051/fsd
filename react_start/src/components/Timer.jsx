import React, { useState } from 'react'

function Timer() {
    let [count,setCount]=useState(0);
     function handleClick()
     {
          setInterval(()=>{
              setCount(++count)
         },1000)

     }
  return (
    <>
        <p>Timer :{count}</p>
         <button onClick={handleClick}>Start</button> 
    </>
  )
}

export default Timer