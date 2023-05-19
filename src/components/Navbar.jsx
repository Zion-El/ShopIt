import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";


const Navbar = () => {
  const state = useSelector((state)=>state.handleCart)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink to='/' className="navbar-brand fw-bold fs-4">
              ShopIt
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to='/' className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/products' className="nav-link">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/about' className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contact' className="nav-link">
                  Contact
                </NavLink>
              </li>

            </ul>


            <div className="buttons">
              
                <NavLink to="/login" className="btn btn-light"><i className="fa fa-sign-in me-1"></i> </NavLink>
                <NavLink to="/register" className="btn btn-light ms-2"><i className="fa fa-user-plus me-1"></i> </NavLink>






                <NavLink to="/cart" className="btn btn-dark rounded-pill ms-2"><i className="fa fa-shopping-cart me-1"></i> {state.length}</NavLink>
            </div>
            
            


          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
