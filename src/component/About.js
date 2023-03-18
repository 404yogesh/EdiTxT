
import React from 'react'
// import PropTypes from 'prop-types'

export default function About(props) {
    let mystyle = {
        color: "",
        backgroundColor:""
    }
// let stylefunction=()=>{
if(props.mode==="light"){
    mystyle.color="text-dark";
    // mystyle.backgroundColor="bg-light";
}
else{
    mystyle.color="text-light";
    // mystyle.backgroundColor="bg-dark";
}
// }

// const[state, setState]=useState("")

    return (
        <div className={`p-5 my-3  ${props.mode==="dark"?"border":"shadow"}  ${mystyle.color}`} style={{backgroundColor: props.mode==="dark"? "#1a3047":"white"}}   >
        <dl className="row">
    <dt className="col-sm-3">Description lists</dt>
    <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

    <dt className="col-sm-3">Term</dt>
    <dd className="col-sm-9">
        <p>Definition for the term.</p>
        <p>And some more placeholder definition text.</p>
    </dd>

    <dt className="col-sm-3">Another term</dt>
    <dd className="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>

    <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
    <dd className="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

    <dt className="col-sm-3">Nesting</dt>
    <dd className="col-sm-9">
        <dl className="row">
        <dt className="col-sm-4">Nested definition list</dt>
        <dd className="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
        </dl>
    </dd>
    </dl>
        </div>
  )
}


