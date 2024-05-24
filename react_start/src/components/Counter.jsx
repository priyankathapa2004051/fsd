import React, { useState } from 'react'

function Counter() {
    let [count,setCount]=useState(1);
    function handleIncrement()
    {
        // hookstate return an array
      setCount(++count);
       
    }
  return (
    <div><h1>Fan-speed-{count}</h1>
<button onClick={handleIncrement}>Increment</button></div>
  )
}

export default Counter