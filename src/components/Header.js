import React from 'react';
import arrow from '../img/arrow-down.png';
import semen from '../img/semen.png';
import elipse from '../img/elipse.png';
import cracker from '../img/cracker.png';

function Header() {
    return(
            <div className ='wrapper'>
                <header>
                    <div className = 'header_first'>
                        <div className='container'>
                            <div className='header_up'>
                                <img className='semen' src={semen} alt='semen'></img>
                                <img className='elipse' src={elipse} alt='semen'></img>
                                <span className='semenText'>3</span>
                                <a href="#">Total:<span>143€</span></a>
                                <a href ="#">Details</a>
                                <img className='arrow' src={arrow} alt='arrow_down'></img>
                            </div>
                        </div> 
                    </div>

                    <div className='cracker'>
                        <img className='cracker' src={cracker} alt='Cracker logo'></img>
                    </div>

                    <div className = 'header_second'>
                        <div className='container'>
                            <ul>
                                <li> <a href="#">Home</a> </li>
                                <li> <a href="#">Abot us</a> </li>
                                <li> <a href="#">Contacts</a> </li>
                                <li> <a href="#">Checkout</a> </li>
                                <li> <a href="#">Account</a> </li>
                            </ul>
                        </div>
                    </div>
                </header>
        </div>
        
    );
}

export default Header;