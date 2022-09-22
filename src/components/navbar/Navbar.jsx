import React from "react";
import './styleNavbar.css'
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const auth = localStorage.getItem('user')
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    navigate('/login')
  }



  
  return (
    <div>
      <ul className="navbar-ul">
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Product</Link></li>
        <li><Link to="/update">Update Products</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {
          auth ? <li><Link onClick={logout} to='/login' >Logout</Link></li>
          : <>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/login">login</Link></li>
            </>
        }

      </ul>
    </div>
  );
};

export default Navbar;
