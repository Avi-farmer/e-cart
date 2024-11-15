import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header({ cartCount }) {

  return (
    <div className="header">
      <div className="container head">
        <div>
          <Link to='/'  style={{ textDecoration: 'none', color:'white' }}><h1>My Shop</h1></Link>
        </div>
        <div className="input">
          <div className="input-group">
            <span className="input-group-text">All</span>
            <input type="text" placeholder="Search" className="form-control" />
            <button className="btn btn-warning"><FaSearch /></button>
          </div>
        </div>
        <div className="d-flex">
          <Link to="/login">
            <button className="login_btn me-3">Login</button>
          </Link>
          <div className="cart_icon">
            <Link to="/cart" style={{ textDecoration: 'none', color:'white' }} id="cart_display">
              <IoCartOutline />
              <span id="cart_display" className="text-white">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
