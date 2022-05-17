import React, { useState } from 'react'

const Day1 = () => {
    const [count,setCount]=useState(0)
    const [E,setE]=useState("")
    const [todo,setTodo]=useState([])
    const handleDec=()=>{
        setCount(count-1)
    }
   
    const handleInc=()=>{
        setCount(count+1)
    }
    const handleMul=()=>{
      setCount(count*2)
    }
    const handleClear=()=>{
      setCount(0)
    }
    const handleChange=(E)=>{
      setE(E.target.value)
}
  const handleAdd=()=>{
    setTodo([...todo,E])
    setE("")
  }
 
  const handleCle=()=>{
    setTodo([])
   
  }
  if(count%2==0)
  {
    return (
      <>
    <p style={{color:"green"}}>{count}</p>
    <button onClick={handleInc}>Increment</button>
         <button onClick={handleDec}>Decrement</button>
         <button onClick={handleMul}>Multiply</button>
         <button onClick={handleClear}>Clear</button>
         </>)

  }
 
  return (
      <>
    <div>
        <p style={{color:"red"}}> {count}</p>
         
         <button onClick={handleInc}>Increment</button>
         <button onClick={handleDec}>Decrement</button>
         <button onClick={handleMul}>Multiply</button>
         <button onClick={handleClear}>Clear</button>
         
    </div>
    {/* <br/>
    <div>
        <input type="text"value={E}  onChange={handleChange}  placeholder="Enter"/>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleCle}>Clear</button>
        {
          todo.map((value)=>(
            <div>
              <p>{value}</p>
            </div>
            
          ))
        }
         */}
    {/* </div> */}
    </>
  )
}

export default Day1
