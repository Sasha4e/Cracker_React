import React from 'react';
import Header from './Header';
import ContentTop from './ContentTop';
import ContentBottom from './ContentBottom';


function MainPage(){
    return(
        <div className ='wrapperTop'>
            <Header />
            <main>
                <ContentTop />
                <ContentBottom />
                
            </main>
        </div>
    );

}

export default MainPage;