import React from 'react'
import { useState } from 'react'
import PropTypes  from "prop-types"
import { useRef } from 'react'
import Pininput from './Pininput'

const Pin = ({length,setOtphandler}) => {
    const inputRef=useRef([])
    const [inputBox]=useState(new Array(length).fill(1))
    const[inputVal,setInputVal]=useState(new Array(length).fill(""))
    const handleChange=(e,index)=>{
        inputVal[index]=e.target.value;
        if(e.target.value>0&&index<length-1)
        {
         
        inputRef.current[index+1].focus()
        }
        setOtphandler(inputVal.join(""))
    }
    const  handleBackSpace=(e,index)=>{
        if(index>0)
        {
            inputRef.current[index-1].focus()
        }
        inputVal[index]=e.target.value;
        setOtphandler(inputVal)
        setOtphandler(inputVal.join(""))
      
    }
  return (
    <div>
        {inputBox.map((item,index)=>{
            return <Pininput key={index} onChange={(e)=>handleChange(e,index)}
            ref={(element)=>{
                inputRef.current[index]=element;
            }}
            onBackSpace={(e)=>handleBackSpace(e,index)}
            />
        })}
    </div>
  )
}

export default Pin
Pin.propTypes={
    length:PropTypes.number,
    onChange:PropTypes.func,

};

{/* <input key={index} onChange={(e)=>handleChange(e,index)} maxLength={1} 
            ref={(element)=>{
                inputRef.current[index]=element;
            }}
          
            /> */}