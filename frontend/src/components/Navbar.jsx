import { Link } from "react-router-dom";
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    logout();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>VChange</h1>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/events">Events</Link>
          {user && (
            <div className="profile-menu">
              <FaUserCircle onClick={toggleDropdown} className="profile-icon" size={24} />
              {isDropdownOpen && (
                <div className="dropdown">
                  <span>{user.email}</span>
                  <button onClick={handleClick}>Log out</button>
                </div>
              )}
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;