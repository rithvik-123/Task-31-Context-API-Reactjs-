import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-circle">🐇</div>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/">Categories</Link>
        <Link to="/">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;