import React from "react";
import './styleNavbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  const auth = localStorage.getItem('user')
  return (
    <div>
      <ul className="navbar-ul">
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Product</Link></li>
        <li><Link to="/update">Update Products</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li>{auth ? <Link to="/logout">Logout</Link> : <Link to="/signup">Sign Up</Link> }</li>
        
      </ul>
    </div>
  );
};

export default Navbar;
