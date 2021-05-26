import React from 'react';
import Questions from '../../Components/Questions/Questions';
import ExaminationSidebar from '../../Components/ExaminationSidebar/ExaminationSidebar';
import './Examination.css';

function Examination() {
    return (
        <div className="examination__content">
            <ExaminationSidebar />

            <Questions />

        
        </div>
    )
}

export default Examination
