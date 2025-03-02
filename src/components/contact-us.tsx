import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import ContactForm from './mailer'



const Contact = () => {
    return (
        <>
            <img src="contact-green.png" alt=""
                className="green-tri-1 position-absolute top-0 end-0"
                style={{ width: '30%', maxWidth: '280px', height: 'auto', objectFit: 'contain' }}
            />
            <section className='home-section position-relative d-flex flex-column'>
                <img src="bg-green-1.png" alt=""
                    className="color-img position-absolute top-0 end-0"
                    style={{ width: '50%', maxWidth: '280px', height: 'auto', objectFit: 'contain' }}
                />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <p>Get Started</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="contact col-lg-8 col-md-8 col-12">
                            <h2>Get in touch with us. We're here to assist you.</h2>
                        </div>
                        <div className="col-4 col-md-4 col-12 social">
                            <div className="social-buttons">
                                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="contact-orange.png" alt=""
                    className="img-frame1 position-absolute bottom-0 start-0"
                />
                
            </section>
            <ContactForm />

            <section className='contact-bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <p>Contact Info</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="contact col-lg-6 col-md-4 col-12">
                            <h2>We are always happy to assist you</h2>
                        </div>
                        <div className="col-lg-3 col-md-4 col-12 email">
                            <h4>Email Address</h4>
                            <div className="contact-border"></div>
                            <div className='help'>
                                <a href="#">help@info.com</a>
                            </div>
                            <div className=" ">
                                <p>Assistance hours:<br />
                                    Monday - Friday 6 am to 8 <br />pm EST</p>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-4 col-12 email">
                            <h4>Number</h4>
                            < div className="contact-border"></div>
                            <div className='help'>
                                <a href="#">(808) 998-34256</a>
                            </div>
                            <div className=" ">
                                <p>Assistance hours:<br />
                                    Monday - Friday 6 am to 8 <br />pm EST</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card last-section">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12 contact-content">
                                        <h3>Subcribe to our Newsletter</h3>
                                        <p>Subscribe for Updates: Stay informed about the latest investor updates, financial results, and announcements by subscribing to our newsletter. </p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Contact;
