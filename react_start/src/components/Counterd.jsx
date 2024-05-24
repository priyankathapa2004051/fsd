import react ,{useState} from 'react'

function Counterd()
{
    let [count,state]=useState(20);
    function handleDecrement()
    {
        if(count>1)
            {
                state(--count)
            }  
        }
    function han()
    {
   state(count=1)
    }
    return(
        <div><h1>fan speed-{count}</h1>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={han}>reset</button>
    </div>
    )
}
    
export default Counterd