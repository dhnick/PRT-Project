import React from 'react';
import Course from './Course';
import './Courses.css';

function Courses() {
    return (
        <div className="courses" >

            <div className="courses__wrap">
                <h2>Courses</h2>

                <Course courseName="GitHub"/>

                <Course courseName="Git"/>

                <Course courseName="Test-Driven Development"/>
            </div>
        </div>
    )
}

export default Courses
