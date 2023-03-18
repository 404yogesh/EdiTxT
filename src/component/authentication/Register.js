import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";



export default function Register(){
    

    const[user ,setUser]=useState({
        username:"",
        email:"",
        password:"",
        reEnterPassword:""
    });

    function handleOnChange(event){
        const{name,value}=event.target;
        setUser({
           ...user,
           [name]:value

        })
    }

    function register(){
        const {username,email,password,reEnterPassword}=user
        if(username && email && password && (password === reEnterPassword))
        {
            
            axios.post("http://localhost:9002/register",user)
            .then((res)=>{alert(res.data.message)
            console.log(res.data.message)})
        }else
        {
            alert("invalid input")
        }

    }
    
    return(
        
        <>
   
   <div className=" d-flex flex-column">
        {/* {console.log(user)} */}
    <span className=" mb-3"><h2 className=" fw-bold text-center">Register</h2></span>
    <label className="w-75  mb-2">Name</label>
    <input type="text" autoComplete="off" name="username" value={user.username} onChange={handleOnChange} placeholder="Enter your name" className="w-100  mb-4"/>
    
    <label className="w-75  mb-2">Email</label>
    <input type="text" autoComplete="off" name="email" value={user.email} onChange={handleOnChange} placeholder="Enter your email" className="w-100  mb-4"/>
    
    <label className="w-75  mb-2">Password</label>
    <input type="password" autoComplete="off" name="password" value={user.password} onChange={handleOnChange} placeholder="Enter your password" className="w-100  mb-4"/>
    
    <label className="w-75  mb-2">Re-Enter Password</label>
    <input type="password" autoComplete="off" name="reEnterPassword" value={user.reEnterPassword} onChange={handleOnChange} placeholder="Enter your password" className="w-100  mb-4"/>
   
    <button className="w-100  mt-3 mb-3" onClick={register}>Register</button>
    <p className="text-center ">Already have an account? <Link to="/login">Login</Link></p>

   </div>
   
   
    </>
)
}
