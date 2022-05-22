import React,{useState} from 'react'
import styles from "./Todo.module.css"
const Todo = () => {
    const[todo,setTodo]=useState([])
    const[E,setE]=useState("")
    const handleChange=(e)=>{
      setE(e.target.value)
    }
    const handleAdd=()=>{
        setTodo([...todo,E])
    }
    const [click,setClick]=useState(false)
    const handleClick=()=>{
      setClick(true)
        
    }

  return (
      <>
    <div style={{textAlign:"center",fontWeight:"bold"}}>
        <input  type="text" value={E} onChange={handleChange} placeholder="Write Something" />
        <button className={styles.button}onClick={handleAdd}>+</button>
    </div>
    {todo.map((data)=>(
        <div style={{display:"flex",justifyContent:"center",borderRadius:"5px",background:"white"}}>
        <p className={"button"+click===true?"green":""}>{data}  <input onClick={handleClick}  type="radio" /></p>
       
        </div>
    ))}
    </>
  )
}

export default Todo