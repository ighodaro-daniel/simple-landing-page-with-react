import React from "react";
import "./index.css";
function Nav(){
    return(
        <div className="main-nav">
        <div className="container flex">
        <h1 className='logo'>logo</h1>
        <nav>
            <ul>
          <li className="nav">home</li>
          <li className="nav">about</li>  
          <li className="nav">portfolio</li>
          <li className="nav">research</li>
        </ul>
        </nav>
        </div>
        </div>
    )
}
export default Nav;