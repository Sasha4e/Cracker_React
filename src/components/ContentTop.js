import React from 'react';

function ContentTop() {
    return(
            <>
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
                    <div className='container'>
                        <a href='#' className='defaultButton'>taste it</a>
                    </div>
                </section>
            </>
    );
}

export default ContentTop;