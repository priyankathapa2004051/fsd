import React, { useState } from 'react'
function  FoodCard(props) {
  return (
    <div className='mainFoodCard'>
    <img src={props.image} alt="" />
    <h1>{props.head}</h1>
    <p>{props.desc}</p>
    </div>
  )
}

export default  FoodCard