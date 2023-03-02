import React from "react";
import "./index.css"
import pexel from "./images/BingWallpaper-7.jpg"
import img2 from "./images/BingWallpaper-5.jpg"
function Portfolio(){
     return(
        <div class="product" id="portfolio">
                <div class="grid-layout">
                    <div class="card card1">
<img src={pexel} alt="flowers" />
                        <h3>pschology</h3>
                        <p>the enormous lead of the well to do in the economic race has been considerably reduced 
                            it is the industrail worker who as a group have done best</p>
                    </div>

                    <div class="card card2">
<img src={img2} alt="flowers" />
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

export default Portfolio