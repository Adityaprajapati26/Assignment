import React from 'react'
interface IButton{
    label:string,
    handleClick:()=>void
}
const Button = ({label,handleClick}:IButton) => {
  return (
   <button onClick={handleClick}>{label}</button>
    
  )
}

export default Button