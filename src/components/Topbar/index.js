import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  const path=process.env.PUBLIC_URL
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <a className="navbar-brand" href="#">
        Ally React
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to={`${path}/`} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`${path}/about`} className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`${path}/contact`} className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            {/* <Link to="/cart" className="nav-link"> */}
            <Link to={`${path}/cart`} className="nav-link">
              Cart
            </Link>
            {/* </Link> */}
          </li>
          <li className="nav-item">
            <Link to={`${path}/products`} className="nav-link">
              Products Listing Page
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;