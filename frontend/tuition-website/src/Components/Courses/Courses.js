import React from 'react';
import Course from './Course';
import './Courses.css';

function Courses() {
    return (
        <div className="courses" >

            <div className="courses__wrap">
                <h2>Courses</h2>

                <div className="courses__container">
                    <Course courseName="GitHub"/>
                        <div className="courses__courseInfo">
                            <img src='/assets/GitHubLogo.png' alt="GitHub Logo" />

                            <p>
                                GitHub is a code hosting platform that enables user to collaborate and use version control like Git. GitHub allows for user to
                                interact and co-operate with code and other developers.
                            </p>
                        </div>

                    <Course courseName="Git"/>
                        <div className="courses__courseInfo">
                                <img src="../../assets/GitLogo.png" alt="Git Logo" />

                                <p>
                                    Git is a version control system meaning that Git track changes in computer files and co-oridnates work on those files 
                                    by a team/person. Git is primarily used for source code management in IT infastructures.
                                </p>
                        </div>

                    <Course courseName="Test-Driven Development"/>
                        <div className="courses__courseInfo">
                                <img src="../../assets/TDDLogo.png" alt="Test-Driven Development concept" />

                                <p>
                                   Test-Driven Development also known as TDD is a method of testing your code in small test cases, allowing for easier debugging
                                   and validation of code. TDD has 3 ativites associated with it coding, testing and reftoring.
                                </p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
