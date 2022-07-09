import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
  return (
    <div>Counter
        <h3>Count is {count}</h3>
        <button className="Increment"onClick={()=>{setCount(count+5)}}>Increment</button>
        <button className='Decrement'  onClick={()=>{setCount(count-5)}}>Decrement</button>



    </div>
  )
}

export default Counter