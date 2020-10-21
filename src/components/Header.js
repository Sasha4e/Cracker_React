import React from 'react';
import arrow from '../img/arrow-down.png';

function Header() {
    return(
            <div className ='wrapper'>
                <header>
                    <div className = 'header_first'>
                        <div className='container'>
                            <div className='header_up'>
                                <a href="#">Total    <span>143€</span></a>
                                <a href ="#">Details</a>
                                <img src={arrow} alt='arrow_down'></img>
                            </div>
                        </div> 
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