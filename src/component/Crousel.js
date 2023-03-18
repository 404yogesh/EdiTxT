import React from 'react'
import "./Crousel.css"
export default function Crousel(props) {
  return (
    <>
      <div className="container d-flex justify-content-evenly my-5 ">
        <p className={`p shadow text-${props.mode==="dark"? "light":""} ${props.mode==="dark"? "shadow-lg":""}`}>
        <h4 className=' text-center  p-2 '>easy to use</h4>
        simple and easy to use...
        </p>
        <p className={`p shadow text-${props.mode==="dark"? "light":""} ${props.mode==="dark"? "shadow-lg":""}`}>
           <h4 className='p-2 text-center'>optimised UI</h4>
          For good user exp... 
        </p>
        <p className={`p shadow text-${props.mode==="dark"? "light":""} ${props.mode==="dark"? "shadow-lg":""}`}>
        <h4 className='p-2 text-center'>use dark mode</h4>
         for dark mode lovers...
        </p>
        <p className={`p shadow text-${props.mode==="dark"? "light":""} ${props.mode==="dark"? "shadow-lg":""}`}>
        <h4 className='p-2 text-center'>use dark mode</h4>
         for dark mode lovers...
        </p>
    
       
      </div>
      <div className="container d-flex justify-content-evenly my-5 ">
        <p className={`p shadow text-${props.mode==="dark"? "light":""} ${props.mode==="dark"? "shadow-lg":""}`}>
        <h4 className=' text-center  p-2 '>easy to use</h4>
        simple and easy to use...
        </p>
        <p className={`p shadow text-${props.mode==="dark"? "light":""} ${props.mode==="dark"? "shadow-lg":""}`}>
           <h4 className='p-2 text-center'>optimised UI</h4>
          For good user exp... 
        </p>
        <p className={`p shadow text-${props.mode==="dark"? "light":""} ${props.mode==="dark"? "shadow-lg":""}`}>
        <h4 className='p-2 text-center'>use dark mode</h4>
         for dark mode lovers...
        </p>
        <p className={`p shadow text-${props.mode==="dark"? "light":""} ${props.mode==="dark"? "shadow-lg":""}`}>
        <h4 className='p-2 text-center'>use dark mode</h4>
         for dark mode lovers...
        </p>
    
       
      </div>
      
    </>
  )
}



