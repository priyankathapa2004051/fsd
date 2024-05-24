import React from 'react'
import Counter from './Counter'
import FoodCard from './FoodCard'
let data=[
{
  head:"Pizza",
  desc:"Pizza are a type of italin food consists of vegetables and sauces in it ",
  img:'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFBpenphfGVufDB8fDB8fHww'
},
{
  head:"Chicken curry",
  desc:"curry, (from Tamil kari: “sauce”), in Western usage, a dish composed with ",
  img:'https://images.unsplash.com/photo-1627366422957-3efa9c6df0fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hpY2tlbiUyMGN1cnJ5fGVufDB8fDB8fHww'
},
{
  head:"dhosa",
  desc:"A dosa is a thin, savoury crepe in South Indian cuisine made from ",
  img:'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RG9zYXxlbnwwfHwwfHx8MA%3D%3D'
}
]
function Home() {
  return (
    <div className='Home'>
      <h1>Home</h1>
      {data.map((element)=>{return(<FoodCard head={element.head} desc={element.desc} image={element.img}/>)})}
    </div>
  )
}

export default Home