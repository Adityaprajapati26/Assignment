import React ,{forwardRef}from 'react'

const Pininput = forwardRef(({onChange, onBackSpace},ref) => {
  const handleKey=(e)=>{
    if(e.keyCode==8){
      onBackSpace(e)

    }
    else{
     onChange(e)
    }


  }
  return (
    <>
        <input 
        // onChange={onChange} 
        maxLength={1} 
           ref={ref}
           onKeyUp={handleKey}
            />
    </>
  )
})

export default Pininput