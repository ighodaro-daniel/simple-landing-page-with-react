import React from 'react';
import Promo from './component/Promo';
import Intro1 from './component/Intro1';
import Intro2 from './component/Intro2';
import Footer from './component/Footer';
import About from "./component/About"
import Portfolio from "./component/Portfolio"
import AnchorLink from 'react-anchor-link-smooth-scroll';
function App() {

  return (
<div className="grid-container"> 
<div className="main-nav mobi-nav">
        <div className="container flex">
        <h1 className='logo'>logo</h1>
          <AnchorLink className="nav" href="#">home</AnchorLink>
          <AnchorLink className="nav" href="#about">about</AnchorLink>  
          <AnchorLink className="nav" href="#portfolio">portfolio</AnchorLink>
          <AnchorLink className="nav" href ="#research">research</AnchorLink>
        </div>
        </div>
  <Promo />
  <Intro1/>
<Intro2 />
<About />
<Portfolio />
<Footer />
</div>
  );
}

export default App;
