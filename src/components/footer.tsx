import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import emailjs from "emailjs-com";

const Footer = () => {
    const [email, setEmail] = useState("");

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.send(
            "service_ifopmdt",   // Replace with your EmailJS Service ID
            "template_0x47ntp",  // Replace with your EmailJS Template ID
            {
                user_email: email,
                message: `
                    Newsletter Subscription
                    Hello,
                    You have a new subscriber!
                    Email:* ${email}*
                `
            },
            "lZ9vmAHXtWvPqZZgJ"    // Replace with your EmailJS Public Key
        )

            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Subscription Successful!");
                setEmail(""); // Reset input field
            })
            .catch((err) => {
                console.error("FAILED...", err);
                alert("Subscription Failed. Try Again.");
            });
    };

    return (
        <div className="container mt-3 mb-5">
            <div className="card">
                <div className="row d-flex flex-wrap">
                    <div className="col-12 col-md-3 d-flex flex-column">
                        <div className="foot-img">
                            <img src="logo.svg" alt="Logo" className="img-fluid" />
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
                            <ul className="list-unstyled">
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
                            <ul className="list-unstyled">
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
                            {/* <p>Over 25000 people have subscribed</p> */}
                        </div>
                        <div className="subscription-form w-100">
                            <form className="form-subscribe" onSubmit={sendEmail}>
                                <div className="input-group">
                                    <input
                                        type="email"
                                        className="form-control input-lg"
                                        placeholder="Enter Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
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
                    <div className="border w-100"></div>
                </div>
                <div className="row mt-2 d-flex flex-wrap text-center">
                    <div className="col-12 col-md-4">
                        <p className="copyright-title">Copyright @ 2025 Swaram</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <p className="copyright-title">Designed & Developed by<a href="https://ayatiworks.com/" target="_blank"><img className="ayati-logo" src="ayati-copyright-logo.png" alt="ayati logo"/></a>
                        </p>
                    </div>
                    <div className="col-12 col-md-4 footer-icon">
                        <div className="d-flex justify-content-center space-x-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="icon" />
                            </a>

                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter className="icon" />
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
    );
};

export default Footer;
