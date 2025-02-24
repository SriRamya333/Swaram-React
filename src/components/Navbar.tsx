import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./about";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src="logo.svg"
            alt="Logo"
            className="d-inline-block align-top"
          />
        </a>

        {/* Navbar Toggle Button (for mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/about">
                About Us
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/service">Services & Solutions</a>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link d-flex align-items-center text-dark"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services & Solutions
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="ms-1 text-dark"
                />
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                  <a className="dropdown-item" href="/web-development">
                    Web Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/cloud">
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/ai">
                    AI & ML Services
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Partnership
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
