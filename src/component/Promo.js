import React from "react";
function Promo(props){


    return(
        <div className="promo">
            <div className="container">
                <div className="grid">
                    <div className = "grid-item">
                    <div className="showcase-text">   
        <h1>Don't miss the Deal</h1>
        <p className="supporting-text">Subscribe to my newsletter,{props.name} and get 50% Deal</p>
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