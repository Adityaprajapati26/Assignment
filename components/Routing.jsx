import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Routing = () => {
    const [data,setData]=useState([])
    const {id}=useParams()
    useEffect(()=>{
         fetch(`http://localhost:8080/product/${id}`)
         .then((r)=>r.json())
         .then((d)=>{
            console.log(d) 
             setData(d)})
       
    },[id])
  return (
    <div>Routing

        <p>{id}</p>
       <p>{data.title}</p>
    </div>
  )
}

export default Routing