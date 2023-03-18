import React from 'react'

export default function Alert(props) {
  
  return (
    <div style={{height:"50px"}}>
    {props.Alert &&
     <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
  {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
 {props.Alert.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
}
</div>
    
  )
}

// setTimeout(() => {
//   setAlert("mnmbn","hggdfdfgh");
// }, 2000);