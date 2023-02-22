import React from "react";
import pexel from "./images/pexels-photo3.webp"
import "./index.css"
function Intro2(){
    return(
        <div class="product">
                <div class="grid-layout">
                    <div class="card card1">
<img src={pexel} alt="flowers" />
                        <h3>pschology</h3>
                        <p>the enormous lead of the well to do in the economic race has been considerably reduced 
                            it is the industrail worker who as a group have done best</p>
                    </div>

                    <div class="card card2">
<img src={pexel} alt="flowers" />
                        <h3>pschology</h3>
                        <p>the enormous lead of the well to do in the economic race has been considerably reduced 
                            it is the industrail worker who as a group have done best</p>
                    </div>

                    <div class="card card3">
<img src={pexel} alt="flowers" />
                        <h3>pschology</h3>
                        <p>the enormous lead of the well to do in the economic race has been considerably reduced 
                            it is the industrail worker who as a group have done best</p>
                    </div>
                </div>
        </div>
    )
}
export default Intro2;