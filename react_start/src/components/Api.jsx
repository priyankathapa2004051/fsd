import React, { useEffect, useState } from 'react'

function Api() {
    let[count,setCount]=useState(1);
    let[hunger,setHunger]=useState(false);
    useEffect(()=>{
      fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(json => console.log(json));
    },[])
    function handleClick()
    {
        setCount(++count);
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>{setCount(++count)}}>click me</button>
        <button onClick={()=>{setHunger(!hunger)}}>bhook lagi hy kya</button>
        <h2 >{hunger?'bhuuk lagi hy':'nhi lagi hy'}</h2>
    </div>
  )
}

export default Api