

import Form from './component/Form';
import Crousel from './component/Crousel';
import Navbar from './component/Navbar'; 
import About from './component/About';
import Alert from './component/Alert';
import Login from './component/authentication/Login';
import Register from './component/authentication/Register';
import React, { useState} from 'react'; 

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  const[user, setUser] =useState({})
  
  // if(user && user._id ) { 
  //   const {username}=user
  // }else{
  //   console.log("no user")
  // }
 
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(" ");
  
  const myAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(".");
      }, 1000);
    }
    
  //  useEffect(()=>{
  //   const {username}=user
  //   setInterval(()=>{
  //     alert("Welcom ")
  //   }, 5000)
  //  },user)
    
    let togglemode=()=>{
      if(mode==="dark"){
        setMode("light");
      document.body.style.backgroundColor="white";
        myAlert("Disable dark mode","success");
     
   
  }
    else{setMode("dark");
    document.body.style.backgroundColor="#2a4e46";
   
      myAlert("Enable dark mode","success");
   
      
  }
  }
  

  return (
    <>
    <Router>
   
   <Navbar title="EDitxT" mode={mode} togglemode={togglemode} about="About Us" />
    <Alert Alert={alert} />
    

   
   <Routes>
         
           <Route path='/' 
           element={ user && user._id ? 
           <div className='container'>
            <Form mode={mode}  heading="Enter text below:" Alert={alert} myAlert={myAlert}/>
           <div className="container mt-0"><Crousel mode={mode} /></div>
           </div>     :
           <div className="shadow p-5 rounded-2 container mt-4  w-50 bg-white"> 
           <div className="rounded-2 container  w-100">  <Login  setUser={setUser}/></div></div>
          } />

            <Route path="/About" element={ <About  mode={mode} /> } />

          <Route path='/Login' element={   <div className="shadow p-5 rounded-2 container mt-4  w-50 bg-white"> 
            <div className="rounded-2 container  w-100">  <Login /></div></div>
            } />

              <Route path='/register'
                        element={      <div className="shadow p-3 rounded-2 container mt-4 w-50 bg-white">
                          <div className=" rounded-2 container  w-100">  <Register /></div></div>
                        }/>
            
        </Routes>
   
   </Router>
   
   
   </>

   
  );
}

export default App;
