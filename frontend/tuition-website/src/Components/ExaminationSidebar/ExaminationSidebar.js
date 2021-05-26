import React, { useState } from 'react';
import './ExaminationSidebar.css';

import Course from '../Courses/Course';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function ExaminationSidebar() {
    const [sidebar, setSidebar] = useState(true);
    let sidebarClassname = sidebar ? 'examinationSidebar open' : 'examinationSidebar';

    const toggleSidebar = () => setSidebar(!sidebar);
    
    return (
        <div className={sidebarClassname}>

            <div className="examinationSidebar__backBlock" onClick={toggleSidebar}>
                <span>Hide</span>
                <ArrowForwardIosIcon />
            </div>
            
            
            <div className="examinationSideber__courses">
                <Course courseName="Git" className="examinationSidebar__course"/>

                <Course courseName="GitHub" className="examinationSidebar__course"/>

                <Course courseName="Test-Driven Development" className="examinationSidebar__course"/>
            </div>
        </div>
    )
}

export default ExaminationSidebar;
