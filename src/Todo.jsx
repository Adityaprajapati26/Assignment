import React from 'react'
import {useState,useEffect} from "react"

const Todo = () => {
    const[value,setValue]=useState("")
    const[todo,setTodo]=useState([])
   
    
    const handleClick=()=>{
        const payload={
            title:value
        }
        
        fetch('  http://localhost:8080/todo',{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
             "content-type":"application/json"
           }
            
        }).then(
            fetch(`http://localhost:8080/todo`)
            .then((res)=>res.json())
            .then((d)=>{setTodo(d)})
        )
        setValue("")

       
        
    };
    useEffect(()=>{
    fetch(`http://localhost:8080/todo`)
            .then((res)=>res.json())
            .then((d)=>{setTodo(d)})
        
    },[])

    
    console.log(todo)
  return (
    <div>
        <input className='InputBox' type="text"  value={value} onChange={(e)=>setValue(e.target.value)}   />
     <button className='Button' onClick={handleClick}>Set</button>
      <div className='Show'>
        {todo.map((data)=>(
             <p key={data.id}>{data.title}</p>
        )

        )}
      </div>

    </div>
  )
}

export default Todo