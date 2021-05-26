import React from 'react';
import QuestionPagination from './QuestionPagination';
import './Questions.css';

function Questions() {
    return (
        <div className="questions">
            

            <div className="questions__wrap">
                
            <h1>Questions: courseName</h1>

            <QuestionPagination />


            </div>

        </div>
    )
}

export default Questions
