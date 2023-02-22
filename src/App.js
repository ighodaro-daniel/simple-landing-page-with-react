import React from 'react';
import Nav from './component/Nav.js'
import Promo from './component/Promo';
import Intro1 from './component/Intro1';
import Intro2 from './component/Intro2';
import Footer from './component/Footer';
function App() {

  return (
<div className="grid-container"> 
  <Nav />
  <Promo />
  <Intro1/>
<Intro2 />
<Footer />
</div>
);
}

export default App;
