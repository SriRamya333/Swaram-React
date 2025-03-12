import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="container mt-3 mb-5">
    <div className="card">
        <div className="row d-flex flex-wrap">
            <div className="col-12 col-md-3 d-flex flex-column">
                <div className="foot-img">
                    <img src="footer-logo.svg" alt="Logo" className="img-fluid" />
                </div>
                <div className="foot-links mt-2">
                    <p>Swaram continues to grow as a trusted global partner, driving impactful solutions across multiple industries.</p>
                </div>
            </div>
            <div className="col-12 col-md-2 d-flex flex-column">
                <div className="foot-head">
                    <h2>LINKS</h2>
                </div>
                <div className="foot-links">
                    <ul className="">
                        <li><a href="#" className="footer-navlink">How it works</a></li>
                        <li><a href="#" className="footer-navlink">Trading</a></li>
                        <li><a href="#" className="footer-navlink">Features</a></li>
                        <li><a href="#" className="footer-navlink">Testimonial</a></li>
                        <li><a href="#" className="footer-navlink">Blogs</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-12 col-md-2 footer-bg d-flex flex-column">
                <div className="foot-head">
                    <h2>LEGAL</h2>
                </div>
                <div className="foot-links">
                    <ul className="">
                        <li><a href="#" className="footer-navlink">Terms of use</a></li>
                        <li><a href="#" className="footer-navlink">Terms of conditions</a></li>
                        <li><a href="#" className="footer-navlink">Privacy policy</a></li>
                        <li><a href="#" className="footer-navlink">Cookie policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column align-items-center text-center">
                <div className="foot-head">
                    <h2>NEWSLETTER</h2>
                    <p>Over 25000 people have subscribed</p>
                </div>
                <div className="subscription-form w-100">
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
        <div className="row mt-4">
            <div className="border w-100"></div>
        </div>
        <div className="row mt-2 d-flex flex-wrap text-center">
            <div className="col-12 col-md-4">
                <p className="copyright-title">Privacy & Terms Contact Us</p>
            </div>
            <div className="col-12 col-md-4">
                <p className="copyright-title">Copyright @ 2025 Swaram</p>
            </div>
            <div className="col-12 col-md-4 footer-icon">
                <div className="d-flex justify-content-center space-x-6">
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
