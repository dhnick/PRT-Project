import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="header__wrap">
                <div className="header__logo">
                    <img src="../../assets/TuitionLogo.png" alt="Tuition Logo" />
                </div>

                <nav className="header__navigation">
                    <ul>
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/courses">Topics</Link>
                        </li>
                        <li>
                            <Link to="/questions">Q/A</Link>
                        </li>
                        <li>
                            <Link to="/register">Sign-Up</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>

                    </ul>
                </nav>


            </div>

        </header>
    )
}

export default Header
