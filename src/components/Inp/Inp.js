import React, { useState } from 'react';
import './Inp.css';

function Inp(props) {
const [count, setCount] = useState(props.initval);
  
const changeVal = (event) => {
    setCount(event.target.value);
   }
   
  

    return(
         <div className="App">
            <input type="range" min="0" max="100" step="1" value={count} onChange = { changeVal } /> 
            <span>{count}%</span>
         </div>
   );
}

export default Inp;