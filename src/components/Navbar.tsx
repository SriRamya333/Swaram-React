import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Collapse from "bootstrap/js/dist/collapse"; // Correct import for Collapse

const Navbar: React.FC = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarNav = document.getElementById('navbarNav');

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992 && navbarNav) {
          const bsCollapse = new Collapse(navbarNav, {
            toggle: false
          });
          bsCollapse.hide(); // Auto-close navbar after clicking
        }
      });
    });

    // Cleanup event listeners
    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener('click', () => {})
      );
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="logo.svg" alt="Logo" className="d-inline-block align-top" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/service">
                Services & Solutions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/partner">
                Partnership
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact-us">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
