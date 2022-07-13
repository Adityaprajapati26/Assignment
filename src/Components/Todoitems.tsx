import React from 'react'
import { ITodoItem } from './Todo'

const Todoitems = ({id,value,status}:ITodoItem) => {
  return (
    <div>{id} {value} {`${status}`}</div>
  )
}

export default Todoitems