import React, { useState } from 'react'
import Button from './Button'
interface ITodos{
    onClick:(value:string)=>void,
}
const Todoinput = ({onClick}:ITodos) => {
    const [E,setE]=useState("")
    const handleClick:React.MouseEventHandler<HTMLButtonElement>=()=>{
     onClick(E)
     setE("")
    }
  return (
    <div>

        <input type="text" value={E} onChange={(e)=>{setE(e.target.value)}} />
        <button onClick={handleClick}>Add</button>
      
    </div>
  )
}

export default Todoinput