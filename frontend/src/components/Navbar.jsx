import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleSignOut = () => {
        setIsLoggedIn(false);
        alert("Signed out!");
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
        alert("Logged in!");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    VChange
                </Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/leaderboard" className="nav-link">
                            Leaderboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/events" className="nav-link">
                            Events
                        </Link>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <FaUserCircle size={30} />
                        </a>
                        <ul
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            {isLoggedIn ? (
                                <>
                                    <li>
                                        <Link
                                            to="/profile"
                                            className="dropdown-item"
                                        >
                                            Personal Stats
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/settings"
                                            className="dropdown-item"
                                        >
                                            Account Settings
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            onClick={handleSignOut}
                                            className="dropdown-item"
                                        >
                                            Sign Out
                                        </a>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <a
                                        href="#"
                                        onClick={handleLogin}
                                        className="dropdown-item"
                                    >
                                        Log In
                                    </a>
                                </li>
                            )}
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
