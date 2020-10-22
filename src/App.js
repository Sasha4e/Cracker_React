import React  from 'react';
import './App.css';

import Inp from './components/Inp.js';
import Header from './components/Header';
import Content from './components/Content'

function App() {
 



  let a = 10,
      b = 90,
      c = 0, 
      d = (100-(a + b + c));

      
   
  return (
  <>
    <div className ='wrapper'>
      <Header />
      <Content />
    </div>
    {/* <div className ="App">
      <Inp initval={a}/>
      <Inp initval={b}/>
      <Inp initval={c}/>
      <Inp initval={d}/>
    </div> */}
    </>
  );
}

export default App;
