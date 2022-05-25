import React, { useState } from 'react'

const Stopwatch = () => {
    const[start,setStart]=useState(0)
    // const[minutes,setMinutes]=useState(1)
    const [id,setId]=useState(null)
    // const[hours,setHour]=useState(0)
   
    const handlestart=()=>{
    
    
        let id=setInterval(()=>{
          setStart((prev)=>prev+1)
      },1000)
      setId(id)
      
        

    }
    const handleReset=()=>{
      
        clearInterval(id)
        setStart(0)
        // setHour(0)
        
        
        
      
       

    }
    const handlestop=()=>{
        clearInterval(id)

    }
   
   
  return (
    <div>
        <h1> Stopwatch</h1>
        <h1>{start}</h1>

  <button onClick={handlestart}>Start</button>
  <button onClick={handleReset}>Reset</button>
  <button onClick={handlestop}>Stop</button>


    </div>
  )
}

export default Stopwatch