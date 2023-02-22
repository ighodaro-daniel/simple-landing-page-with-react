import React from "react";
import "./index.css"
function Promo(props){


    return(
        <div className="promo">
            <div className="container">
                <div className="grid">
                    <div className = "grid-item">
                    <div className="showcase-text">   
        <h1>Life is so Beautiful</h1>
        <p className="supporting-text">Subscribe to my newsletter and get daily qoute</p>
    </div>
    <div className="promo-form">
        <form>
            <input type="email" placeholder="enter your email address"/>
            <input type="submit" className="btn" value="subscribe"/>
        </form>
        </div>
        </div>


            
        </div>
        </div>
    </div>

    )
}
export default Promo;