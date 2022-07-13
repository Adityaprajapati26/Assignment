import axios from 'axios';
import React, { useState } from 'react'
import Header from './Header'
import Todoinput from './Todoinput'
import Todoitems from './Todoitems';
export interface ITodoItem{
    id:number;
    value:string;
    status:boolean;
}
const Todo = () => {
    const [Todos,setTodos]=useState<ITodoItem[]>([])
    const handleClick=(value:string)=>{
        const payload={
            value,
            status:false,
           
        }
        return (axios.post(`http://localhost:8080/todos`,payload))
        .then(getTodos)
        

    }
    const getTodos=()=>{
        axios.get(`http://localhost:8080/todos`)
        .then(({data}:{data:ITodoItem[]})=>setTodos(data))
    }
  return (
    <div>
   <Header label="Todo"/>

   <Todoinput onClick={handleClick} />
   <div>
    {Todos.map((data)=>(
         <Todoitems key={data.id} {...data}/>
    ))}
    
   </div>

    </div>
  )
}

export default Todo