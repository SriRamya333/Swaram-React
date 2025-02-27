import "bootstrap/dist/css/bootstrap.min.css";
// import About from "./about";
// import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="/">
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
            <li className="nav-item">
              <a className="nav-link active" href="/service">Services & Solutions</a>
            </li>
            

            <li className="nav-item">
              <a className="nav-link" href="#">
                Partnership
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/contact-us">
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
