import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const Testimonial = () => {
    return (
        <>
  <div className="container py-5">
    {/* Logo Row */}
    <div className="row justify-content-center">
      <div className="col-lg-12 col-md-12 col-12 text-center">
        <img src="/swaram.png" className="img-fluid" alt="Logo" />
      </div>
    </div>

    {/* Heading Section */}
    <div className="row align-items-center mt-4">
      <div className="col-auto">
        <span className="content fw-bold px-3 py-2 rounded">
         <h4>TESTIMONIALS</h4> 
        </span>
      </div>
      <div className="col">
        <div className="border border-success border-1 w-25"></div>
      </div>
    </div>
    <div className="row">
      <h3 className="mt-2 fw-bold text-primary">What Our Customers Say</h3>
      <p>
        Discover the Success Stories and Satisfaction of Clients Who Have <br />
        Benefited from Our Expertise and Personalized Financial Guidance.
      </p>
    </div>

    {/* Bootstrap Carousel */}
    <div id="testimonialCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="testimonial-card p-4 shadow-sm">
                <img src="/profile1.jpg" className="testimonial-img" alt="User 1" />
                <h5 className="fw-bold">Grace Turner</h5>
                <p className="text-muted">Director</p>
                <p>Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community.</p>
                <span className="quote-icon">❝</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="testimonial-card p-4 shadow-sm">
                <img src="/profile2.jpg" className="testimonial-img" alt="User 2" />
                <h5 className="fw-bold">Linda Carter</h5>
                <p className="text-muted">Analyst</p>
                <p>Financial planning and investment advice I received from this team completely transformed my future. I couldn't be happier with the results.</p>
                <span className="quote-icon">❝</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="testimonial-card p-4 shadow-sm">
                <img src="/profile1.jpg" className="testimonial-img" alt="User 3" />
                <h5 className="fw-bold">Grace Turner</h5>
                <p className="text-muted">Director</p>
                <p>Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community.</p>
                <span className="quote-icon">❝</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="testimonial-card p-4 shadow-sm">
                <img src="/profile3.jpg" className="testimonial-img" alt="User 4" />
                <h5 className="fw-bold">Robert Williams</h5>
                <p className="text-muted">CEO</p>
                <p>Exceptional service! Their insights helped our business grow tremendously.</p>
                <span className="quote-icon">❝</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="testimonial-card p-4 shadow-sm">
                <img src="/profile4.jpg" className="testimonial-img" alt="User 5" />
                <h5 className="fw-bold">Emily Davis</h5>
                <p className="text-muted">Marketing Lead</p>
                <p>Professional, insightful, and dedicated to providing the best financial guidance.</p>
                <span className="quote-icon">❝</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="testimonial-card p-4 shadow-sm">
                <img src="/profile5.jpg" className="testimonial-img" alt="User 6" />
                <h5 className="fw-bold">Michael Brown</h5>
                <p className="text-muted">Financial Advisor</p>
                <p>I've never worked with a team so committed to success. Highly recommended!</p>
                <span className="quote-icon">❝</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</>

     
      
    )

}

export default Testimonial;
