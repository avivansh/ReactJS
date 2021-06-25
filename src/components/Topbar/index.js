import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts, addToCart } from "../../redux/actions";

const Topbar = ({cart,products}) => {
  const path=process.env.PUBLIC_URL
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light p-2">
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
              Cart<sup>{cart.length}</sup>
            </Link>
            {/* </Link> */}
          </li>
          <li className="nav-item">
            <Link to={`${path}/products`} className="nav-link">
              Products Listing Page
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`${path}/signin`} className="nav-link">
              Sign-In
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`${path}/signup`} className="nav-link">
              Sign-up
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`${path}/movies`} className="nav-link">
              Movies
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (store) => ({
  products: store.products,
  cart: store.cart
});


export default connect(mapStateToProps, null)(Topbar);