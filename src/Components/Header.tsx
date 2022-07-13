import React from 'react'
  interface IHeader{
    label?:string,
    children?:JSX.Element
  }
const Header = ({label="counter",children}:IHeader) => {
  return (
    <div>
        {children}
  <h1>{label}</h1>

    </div>
  )
}

export default Header