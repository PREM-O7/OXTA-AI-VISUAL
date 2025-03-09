import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>OXTA VISUALS AI</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/login">Login / Signup</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
