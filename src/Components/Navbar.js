import React from 'react'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><h3>{props.title}</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li> */}
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" >
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        
      </ul>
      <div className="form-check ">
  <input className="form-check-input" onClick={props.Gmode} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    Green Mode
  </label>
</div>
&nbsp; &nbsp;
<div className="form-check my-2" >
  <input className="form-check-input" onClick={props.Rmode} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    Red Mode
  </label>
</div>
&nbsp; &nbsp;
<div className="form-check my-2">
  <input className="form-check-input" onClick={props.Ymode} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label"   htmlFor="flexRadioDefault1">
    Yellow Mode  
  </label>
</div>
&nbsp; &nbsp;
<div className="form-check my-2">
  <input className="form-check-input" onClick={props.changeMode} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label"   htmlFor="flexRadioDefault1">
    Blue Mode
  </label>
</div>
    </div>
  </div>
</nav>
  )
}
Navbar.defaultProps={
title:'Set Title'
};
