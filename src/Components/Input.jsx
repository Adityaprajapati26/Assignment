import React from 'react'
import { useState } from 'react'
import Pin from './Pin'

const Input = () => {
    const[otp,setOtp]=useState("")
  return (
    <div>
    
        <Pin 
        length={4}
        setOtphandler={(value)=>setOtp(value)}/>
            The otp is{otp}
    </div>
  )
}

export default Input