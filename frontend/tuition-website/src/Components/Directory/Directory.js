import React from 'react';
import './Directory.css';

function Directory() {
    return (
        <div className="directory">
            {/* Image */}
            <div className="directory__imageContainer">
                <h1 className="directory__imageHeading">Welcome</h1>
            
                <h3 className="directory__imageSubHeading">A place where student can archive</h3>
            
                <button>Courses</button>
            </div>
            
        </div>
    )
}

export default Directory
