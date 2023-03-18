import React,{useState} from 'react'
import PropTypes from 'prop-types'



export default function Form(props) {
  const handleOCU=()=>{
    console.log("you cliked on button");
    let newText = text.toUpperCase();
    setText(newText);
    props.myAlert("Converted to uppercase ","success");
    
  }
  
  const handleOCL=()=>{
    console.log("you cliked on button");
    let newText = text.toLowerCase();
    setText(newText);
    props.myAlert("Converted to lowercase","success");

  }

  const [text,setText]= useState("");
  const handleOCH=(event)=>{
    setText(event.target.value);
    
  }

  const handleOC=()=>{
    setText("");
    props.myAlert("All Clear","success");
  }

  const handleCopy=()=>{
    navigator.clipboard.writeText(text)
    props.myAlert("Copied to clipboard","success");
  }

  //write a function thast can replace all the accurence of a particular word to new word 



  const handleRe=()=>{
    
    const search = prompt("select word: ")
    const replaceWith= prompt("replace with : ")

    const result = text.replaceAll(search, replaceWith);
    setText(result);
    props.myAlert("Replaced all","success");

    
  }

  const handleRes=()=>{
    let newText = text.split(/[ ]+/)
setText(newText.join(" ")) 
props.myAlert("Removed","success");

}

  // let Fstyle={
  //       color: props.mode==="light"? "black":"white"
  // }
  return (
    <div >
      <div className="mx-5"><h1 className={`text-center text-${props.mode==="dark"?"light":"dark"}`}>--EDitxT--{props.username}</h1></div>
        <h3 style={{color:props.mode==="dark"? "white":"black", marginTop:"20px"}}>{props.heading}</h3>
<div className="mb-3">
  <textarea className="form-control " onChange={handleOCH} style={{backgroundColor:props.mode==="dark"? "grey":"#fff1f1", cursor: "text",color:props.mode==="dark"?"white":"black" }} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
   <div className="btn container d-flex flex-row-reverse">
<button className='shadow-sm btn btn-outline-info ms-5 fs-5 p-2 rounded-3' onClick={handleRe}>ReplaceAll</button>
<button className='shadow-sm btn btn-outline-info  fs-5 p-2 rounded-3' onClick={handleOCU}>Uppercase</button>
<button className='shadow-sm btn btn-outline-info mx-5 fs-5 p-2 rounded-3' onClick={handleOCL}>Lowercase</button>
<button className='shadow-sm btn btn-outline-info fs-5 p-2 rounded-3' onClick={handleOC}>Clear</button>
<button className='shadow-sm btn btn-outline-info mx-5 fs-5 p-2 rounded-3' onClick={handleCopy}>Copy</button>
<button className='shadow-sm btn btn-outline-info  fs-5 p-2 rounded-3' onClick={handleRes}>Remove extra space</button>
        </div>  

     <div className="summary w-25 ">
      <p className='border border-3 rounded-pill  text-center my-3 p-2 fs-4 bg-success text-white'>
        {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} Words & {text.length} Characters.</p>
     </div>

      <div className="preview border border-3 rounded h-50">
        <div className='bg-dark text-white text-center py-1 '   >
        <h2>preview</h2>
        </div>
        <div className='my-2 '>
        <p className='p-3 h-50' style={{color:props.mode==="dark"?"white":"black"}}>{text}</p>
        </div>
      </div>

      
        


    </div>
  )
}
Form.protoTypes={
    heading: PropTypes.string.isRequired
}

Form.defaultProps={
        heading:"Enter text below:"
}
