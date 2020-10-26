import React from 'react';
import circle from '../img/circleCracker.png';
import Counter from './Counter'

function ContentBottom() {
    return(
            <section className='contentBottom'>
                <div className='container'>
                    
                    <img className='circle' src={circle} alt='cracker'></img>
                    <h2>About Cracker</h2>
                   <div className="bottomRightSection">
                        <p>
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                    </div>
                    <div className='constructor'>
                        <h3 >cracker constructor</h3>
                    </div>
                     <div className='counter'>
                  <Counter />
                </div>
                </div>
               
            </section>
           
            
    );
}

export default ContentBottom;