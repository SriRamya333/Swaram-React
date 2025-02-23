import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="row">
                        <div className="col-3">
                            <div className="foot-img">
                                <img src="foot.png" alt="Logo" />
                            </div>
                            <div className="foot-links mt-2">
                                <p>Massa blandit semper varius faucibus. Suspendisse viverra venenatis placerat nam ut. Pellentesque sit id tempor turpis.</p>
                            </div>

                        </div>
                        <div className="col-2">
                            <div className="foot-head">
                                <h2>LINKS</h2>
                            </div>
                            <div className="foot-links">
                                <ul>
                                    <li>
                                        <a href="#" className="footer-navlink">How it works</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer-navlink">Trading</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer-navlink">Features</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer-navlink">Testimonial</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer-navlink">Blogs</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-bg col-3">
                            <div className="">


                                <div className="foot-head">
                                    <h2>LEGAL</h2>
                                </div>
                                <div className="foot-links">
                                    <ul>
                                        <li>
                                            <a href="#" className="footer-navlink">Terms of use</a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer-navlink">Terms of conditions</a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer-navlink">Privacy policy</a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer-navlink">Cookie policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="foot-head">
                                <h2>NEWSLETTER</h2>
                                <p>Over 25000 people have subscribed</p>
                            </div>
                            <div className="subscription-form">
                                <form className="form-subscribe" action="#">
                                    <div className="input-group">
                                        <input type="text" className="form-control input-lg" placeholder="Enter Your email" />
                                        <span className="input-group-btn">
                                            <button className="btn btn-success btn-lg" type="submit">Subscribe</button>
                                        </span>
                                    </div>
                                </form>
                                <p>We don’t sell your email and spam</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="border"> </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-lg-4 col-md-4 col-12">

                            <div className="">
                                <p className="copyright-title"> Privacy & Terms Contact Us

                                </p>
                            </div>



                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="">
                                <p className="copyright-title">Copyright @ 2025 Swaram

                                </p>
                            </div>
                        </div>
                        <div className="footer-icon col-lg-4 col-md-4 col-12">
                            <div className="flex text-right space-x-6">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="icon" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="icon" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="icon" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="icon" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )

}

export default Footer;
