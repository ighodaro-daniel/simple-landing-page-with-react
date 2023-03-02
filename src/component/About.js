import React from "react";
import mainImg from "./images/BingWallpaper6.jpg"
function About(){
    return(
<div className="about-page" id="about">
<div className="article">
<img src={mainImg} className="about-pics little-img"alt="tropical forest view"/>
<div className="wrap-text mobi-text">
<h1>we give you the very best of life</h1>
<p>we are a group of very important people</p>
<p>we believe the best is yet to come</p>
<p>life is uncertain, death is sure , sin is the cause</p>
<button className="about-btn">explore more</button>
</div>
</div>
</div>
 )
}
export default About