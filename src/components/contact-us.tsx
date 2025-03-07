import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./mailer";

const Contact = () => {
  return (
    <>
      {/* Top Decorative Image */}
      <img
        src="contact-green.png"
        alt=""
        className="position-absolute top-0 end-0 d-none d-md-block"
        style={{ width: "30%", maxWidth: "280px", height: "auto" }}
      />

      {/* Main Contact Section */}
      <section className="home-section position-relative d-flex flex-column">
        <img
          src="bg-green-1.png"
          alt=""
          className="position-absolute top-0 end-0 d-none d-md-block"
          style={{ width: "50%", maxWidth: "280px", height: "auto" }}
        />

        <div className="container mt-5">
          {/* Header */}
          <div className="row text-center text-md-start">
            <div className="col-12">
              <p className=" ">Get Started</p>
            </div>
          </div>

          {/* Title and Social Icons */}
          <div className="row align-items-right">
            <div className="col-lg-8 touch">
              <h2>Get in touch with us. We're here <br />to assist you.</h2>
            </div>
            <div className="col-lg-4 d-flex justify-content-lg-end justify-content-center mt-3 mt-lg-0">
              <div className="social-buttons">
                <a href="#" className="me-3">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="me-3">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="container">
          <ContactForm />
          {/* <img
          src="about-tri.png"
          alt=""
          className="position-absolute top-0 end-0 d-none d-md-block"
          style={{ width: "50%", maxWidth: "280px", height: "auto" }}
        /> */}
        </div>

        {/* Bottom Decorative Image */}
        <img
          src="contact-orange.png"
          alt=""
          className="position-absolute bottom-0 start-0 d-none d-md-block"
        />

      </section>

      {/* Contact Info Section */}
      <section className="contact-bg py-5">
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-12">
              <p className="">Contact Info</p>
            </div>
          </div>

          <div className="row align-items-start">
            <div className="col-lg-6 assist">
              <h2>We are always happy to assist you</h2>
            </div>

            {/* Email Info */}
            <div className="col-lg-3 col-md-6 mt-4 mt-md-0 address">
              <h4>Email Address</h4>
              <div className="contact-border"></div>
              <p><a href="mailto:help@info.com">help@info.com</a></p>
              <p>Assistance hours:<br /> Mon - Fri: 6 AM - 8 <br /> PM EST</p>
            </div>

            {/* Phone Info */}
            <div className="col-lg-3 col-md-6 mt-4 mt-md-0 address">
              <h4>Phone Number</h4>
              <div className="contact-border"></div>
              <p><a href="tel:+180899834256">(808) 998-34256</a></p>
              <p>Assistance hours:<br /> Mon - Fri: 6 AM - 8 <br /> PM EST</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card p-4 border-0 shadow sub">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <h3>Subscribe to our Newsletter</h3>
                    <p>
                      Stay informed about the latest investor updates, financial results, and announcements by subscribing to our newsletter.
                    </p>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center">
                    <div className="subscribe-container">
                      <input type="email" placeholder="Enter your email" />
                      <button>Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
