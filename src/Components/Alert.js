import React from 'react'

export default function Alert(props) {
  return ( 
    <div  style={{height:50}}>
    { props.alert &&
   
     <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.typ}</strong>:{props.alert.msg}</div> }
  {/* <div>
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> */}
    </div>
  )
}
