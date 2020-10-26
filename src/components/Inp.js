import React, { useState } from 'react';


function Inp(props) {
   const [count, setCount] = useState(props.initval);
   const changeVal = (event) => {
      if (event.target.value >= 0 && )
      setCount(event.target.value);
   }

   return (
         <div className="inp">
            <input type="range" min="0" max="100" step="1" value={count} onChange = { changeVal } /> 
            <span>{count}%</span>
         </div>
   );
}

export default Inp;