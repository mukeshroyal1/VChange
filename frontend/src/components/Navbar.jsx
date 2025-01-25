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
        <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#1aac83" }}
        >
            <div className="container">
                {/* Custom Pill Brand */}
                <Link
                    to="/"
                    className="d-flex align-items-center text-decoration-none"
                    style={{
                        backgroundColor: "white",
                        color: "#1aac83",
                        borderRadius: "50px",
                        padding: "5px 15px",
                        fontWeight: "bold",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow =
                            "0px 6px 10px rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow =
                            "0px 4px 6px rgba(0, 0, 0, 0.1)";
                    }}
                >
                    <img
                        src="/assets/logo.svg"
                        alt="Logo"
                        style={{ height: "25px", marginRight: "10px" }}
                    />
                    VChange
                </Link>

                {/* Navbar Toggle for Mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/leaderboard"
                                className="nav-link text-white"
                            >
                                Leaderboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/events" className="nav-link text-white">
                                Events
                            </Link>
                        </li>

                        {/* Profile Dropdown */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle text-white"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <FaUserCircle size={25} />
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
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
            </div>
        </nav>
    );
};

export default Navbar;
