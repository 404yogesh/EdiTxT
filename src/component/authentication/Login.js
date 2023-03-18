import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function Login(props) {

  
  const navigate = useNavigate();
  const [user, setUser] = useState({

    email: "",
    password: "",

  });


  function handleOnChange(event) {

    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  function login(){
    const {email,password}=user
    if(email && password )
    {
        axios.post("http://localhost:9002/login",user)
        .then((res)=>{
          alert(res.data.message)
          navigate('/')
          props.setUser(res.data.user)
          
        })
    }else
    {
        alert("invalid input")
    }

}


  return (
    <>

      <div className=" d-flex flex-column  ">
        {/* {console.log(user)} */}
        <span className=" mb"><h2 className="fw-bold text-center">Login</h2></span>
       
        <label className="w-75 mb-2">Email</label>
        <input type="text" autoComplete="off" name="email" value={user.email} onChange={handleOnChange} placeholder="Enter your email" className="w-100 mb-4" />
        
        <label className="w-75 mb-2">Password</label>
        <input type="password" autoComplete="off" name="password" value={user.password} onChange={handleOnChange} placeholder="Enter your password" className="w-100 mb-4" />

        <button className="w-100 -3 mb-3" onClick={login}>login</button>
        <p className="text-center">New user? <Link to ="/register">Register</Link></p>

      </div>

    </>
  )
}
