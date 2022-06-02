import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    const [todo,setTodo]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:8080/product`)
        .then((r)=>r.json())
        .then((d)=>{
          console.log(d)
          setTodo(d)})
    },[])
  return (
    <div>Product
    {todo.map((item)=>(
        <>
       <div key={item.id}>
       <Link to={`/Product/${item.id}`}>{item.name}</Link>
       {/* <Link to={`/Routing/${item.id}`}>{item.id}</Link> */}
       </div>
       
        </>
    ))}
     <Outlet/>
    </div>
  )
}

export default Product