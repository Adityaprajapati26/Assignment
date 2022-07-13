import React, { useState } from 'react'
import Button from './Button'
import Header from './Header'

const Counter = () => {
    const[count,setCount]=useState(0)
    const handleClick=(value:number)=>{
        setCount(count + value)
    }
    
  return (
    <div>
      <Header>
        <h1>Counter</h1>
      </Header>
      <Header label={`${count}`}/>
      <Button label="ADD" handleClick={()=>handleClick(1)} />
      <Button label="Reduce" handleClick={()=>handleClick(-1)} />

    </div>
  )
}

export default Counter