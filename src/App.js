import React from 'react';
import Nav from './component/Nav.js'
import Promo from './component/Promo';
import Intro1 from './component/Intro1';
import Intro2 from './component/Intro2';
import Footer from './component/Footer';
function App() {
  const data ={
    name:"denzel washington",
    logo:"youtube"
  }
  return (
<div> 
  <Nav />
  <Promo name="document" />
  <Intro1 name ={data.name}
  logo ={data.logo} />
<Intro2 name = {data.name}
logo = {data.logo} />
<Footer />
</div>
);
}

export default App;
