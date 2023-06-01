import React from 'react';
import {Link} from "react-router-dom";

function Banner({isLoggedIN}) {

    const isLoggedIn = false;

    return (
        <div className="banner">
            <h1 className="banner-text">Music Production Co-op</h1>
            <div className="banner-content">
            <div className="nav-links">
                <nav>
                    <ul className="nav-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/environment">Environments</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="login-register">
                {isLoggedIn ? (
                    <p>Welcome, User! Log out</p>
                ) : (
                    <div>
                        <p>Log in or Register</p>
                    </div>
                )}
            </div>
        </div>


        </div>
    );
}

export default Banner;