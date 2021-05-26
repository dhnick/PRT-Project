import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

function MainLayout(props) {
    return (
        <div>
            <Header {...props} />

            <div>
                {props.children}
            </div>
            
            <Footer {...props} />

        </div>
    )
}

export default MainLayout;
