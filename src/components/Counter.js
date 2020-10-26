import React from 'react';
import Inp from './Inp.js';

function Counter() {

     let a = 10,
      b = 80,
      c = 0, 
      d = (100-(a + b + c));

    return(
        <section>
            <Inp initval={a}/>
            <Inp initval={b}/>
            <Inp initval={c}/>
            <Inp initval={d}/>
        </section>
       
    );
}

export default Counter;