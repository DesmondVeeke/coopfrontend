import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Banner = () => {
    const isLoggedIn = localStorage.getItem('token') !== null;
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="banner">
            <h1 className="banner-text">Music Production Co-op</h1>
            <div className="banner-content">
                <div className="nav-links">
                    <nav>
                        <ul className="nav-list">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            {isLoggedIn && (
                                <>
                                    <li>
                                        <Link to="/environments">Environments</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
                <div className="login-register">
                    {isLoggedIn ? (
                        <div>
                            <p>Welcome, User!</p>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <div>
                            <ul className="nav-list">
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Banner;
