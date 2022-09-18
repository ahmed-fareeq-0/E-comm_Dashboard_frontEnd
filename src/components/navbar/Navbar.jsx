import React from "react";
import { Link } from "react-router-dom";
import './styleNavbar.css'
const Navbar = () => {
  return (
    <div>
      <ul className="navbar-ul">
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Product</Link></li>
        <li><Link to="/update">Update Products</Link></li>
        <li><Link to="/logout">Logout</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
