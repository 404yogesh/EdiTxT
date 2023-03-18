import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar(props) {
  return (
      <div className='shadow'>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode==="dark"?"secondary":"light"}`}>
    <div className="container-fluid ">
      <a className="navbar-brand" href="/">{props.title}</a>
    
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active " aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/About">{props.about}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/Login">Login</Link>
          </li>
        </ul>
          {/* <form className="d-flex"> */}
          <div className="form-check form-switch">
            <span>{props.username}</span>
      <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className={`form-check-label ${props.mode==="dark"? "text-light" : "text-dark"} `} htmlFor="flexSwitchCheckDefault">DarkMode</label>
    </div>  
          
      </div>
    </div>
  </nav>

      </div>
  )
}
// navbar ka jo proptype hai
// title or about ka vo string honi chahiye, yeh cheez ensure karega yeh neeche vala object
//agar string ke alawa kisi or type ki value pass kari props mein toh error dkehne ke liye milaga console mein kyunki proptype string set ho rakhkha hai
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired
}


//defalut values set karega yeh vala object
Navbar.defaultProps={
    title:"Set Title Here",
    About:"Set About Here"
}