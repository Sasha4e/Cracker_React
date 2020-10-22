import React from 'react';
import arrow from '../img/arrow-down.png';
import semen from '../img/semen.png';
import elipse from '../img/elipse.png';
import cracker from '../img/cracker.png';
import greenSection from '../img/greenSection.png';

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
                        <nav className='container'>
                            <ul>
                                <li> <a href="#">Home</a> </li>
                                <li> <a href="#">Abot us</a> </li>
                                <li> <a href="#">Contacts</a> </li>
                                <li> <a href="#">Checkout</a> </li>
                                <li> <a href="#">Account</a> </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main>
                    <section className='leftSection'>
                        <p>
                            Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing elit, sed do<br></br> eiusmod tempor incididunt ut labore<br></br> et dolore magna aliqua.<br></br>Lorem ipsum dolor sit amet
                        </p>
                        <div className='stick'></div>
                    </section>
                    <section className='rightSection'>
                        <p>
                            mostly tastes<br></br>
                            with freshes
                        </p>
                    </section>
                </main>
            </div>
        
    );
}

export default Header;