import 'bootstrap/dist/css/bootstrap.min.css';
import Future from './future';
import OurService from './our-service';
import Why from './why';
import Connect from './connect';
import Testimonial from './testimonial';
import Side from './side';

const Home = () => {
  return (
    <>
    
 <section className='home-section position-relative d-flex flex-column'>
 <img src="bg-green-1.png" alt="" 
    className="color-img position-absolute top-0 end-0"
    style={{ width: '50%', maxWidth: '280px', height: 'auto', objectFit: 'contain' }} 
  />

  <img src="green-tri.png" alt="" 
    className="green-tri position-absolute top-0 start-0" 
    style={{ width: '30%', maxWidth: '280px', height: 'auto', objectFit: 'contain' }} 
  />

  <img src="Frame-3.png" alt="" 
    className="img-frame position-absolute bottom-0 start-0" 
    style={{ width: '25%', maxWidth: '180px', height: 'auto', objectFit: 'contain' }} 
  />

  <img src="Frame-4.png" alt="" 
    className="img-frame1 position-absolute bottom-0 end-0" 
    style={{ width: '25%', maxWidth: '220px', height: 'auto', objectFit: 'contain' }} 
  />
   {/* Container for Content */}
   <div className='container position-relative d-flex flex-column align-items-center text-center py-5'>
    {/* Content */}
    <div className='row justify-content-center w-100 position-relative' style={{ zIndex: 1 }}>
      <div className='col-lg-10 col-md-12 col-12'>
        <div className='bg-text mt-5'>
          <h3>Shaping the Future of Global Trade & Services</h3>
        </div>
        <div className='para-text'>
          <p>Explore our solutions in Infrastructure, Logistics, Energy, and Trading.</p>
        </div>

        {/* Buttons */}
        <div className='d-flex flex-wrap justify-content-center gap-3 mt-3'>
          <div className="para-button">
          <a href='#' className='btn px-4 py-2'>Discover More</a>
          </div>
         <div className="para-button1">
         <a href='#' className='btn px-4 py-2'>Contact Us</a>
         </div>
        </div>

        {/* Image Section */}
        <div className='row mt-5 justify-content-center'>
          <div className='img col-md-6 col-10 d-flex justify-content-center'>
            <img src='Group-0.png' alt='Description' className='img-fluid' style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </div>

    {/* Background Image (Centered and Responsive) */}
    <img 
      src='Group-5.png' 
      alt='' 
      className='bg-main mt-5 position-absolute top-50 start-50 translate-middle' 
      style={{ 
        zIndex: 0, 
        height: 'auto', 
        maxHeight: '105vh', 
        objectFit: 'contain', 
        width: '65vh',
      }} 
    />
  </div>
 </section>

   {/* Future Section */}
   <section className='position-relative d-flex flex-column'>
      <div className='oval'>
      <div className="container">
      <div className="popular">
      <h2>We Featured on Popular Partners Like</h2>
      </div>
       <div className="row text-center mt-5">
        <div className="partner col-lg-3 col-md-3 col-12">
           <img src="Fortune.png"/>
        </div>
        <div className="col-lg-3  col-md-3 col-12">
          <img src="Forbes.png"/>
        </div>
        <div className="col-lg-3 col-md-3 col-12">
        <img src="invest-detroit.png"/>
        </div>
        <div className="col-3 col-md-3 col-12">
        <img src="Robinhood.png"/>
        </div>
       </div>
    </div>
      </div>
    </section>
    
    {/* Our Services Section */}
    <section className='position-relative d-flex flex-column'>
    <div className="container-fluid bg position-relative">
        <div className="container">
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-lg-6 col-md-6 col-12 text-center text-md-start mt-5">
              <img src="graph.png" className="img-fluid" style={{ maxWidth: "80%", height: "auto" }} />
            </div>

            {/* Content Section */}
            <div className="col-lg-6 col-md-6 col-12 mt-4 mt-md-0">
              {/* Section Header */}
              <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                <div className="content">
                  <h4>OUR SERVICES</h4>
                </div>
                <div className="border border-success border-1 opacity-100 ms-3"></div>
              </div>

              {/* Title */}
              <div className="row">
                <div className="col-1 class_child_div">
                  <span className="line"><img src="line.svg" /></span>
                </div>
                <div className="col-11">
                  <h2 className="logic text-center text-md-start mt-3">
                    Explore our expertise in Trading, Infrastructure, Logistics, and Energy
                  </h2>
                </div>
              </div>



              {/* Service List */}
              <div className="mt-4">
                <div className="row row-cols-1 row-cols-md-2 g-3">
                  <div className="col d-flex align-items-center">
                    <img src="dollar.png" className="me-2" style={{ width: "30px", height: "30px" }} />
                    <p className="trade mb-0">Global Trading</p>
                  </div>
                  <div className="col d-flex align-items-center">
                    <img src="coin.png" className="me-2" style={{ width: "30px", height: "30px" }} />
                    <p className="trade mb-0">Logistics & Supply Chain Management</p>
                  </div>
                  <div className="col d-flex align-items-center">
                    <img src="house.png" className="me-2" style={{ width: "30px", height: "30px" }} />
                    <p className="trade mb-0">Energy Solutions</p>
                  </div>
                  <div className="col d-flex align-items-center">
                    <img src="office.png" className="me-2" style={{ width: "30px", height: "30px" }} />
                    <p className="trade mb-0">Infrastructure & Construction</p>
                  </div>
                </div>
              </div>

              {/* Explore Button */}
              <div className="explore d-flex justify-content-center justify-content-md-start mt-4">
                <a href="#" className="btn1 btn-primary mt-2 px-4 py-2">Explore Services</a>
              </div>
            </div>
          </div>
        </div>

        {/* Background Image - Positioned Behind Content */}
        <img src="01.png" alt="" className="w-100 img-fluid position-absolute start-0 bottom-0" style={{ zIndex: "-1" }} />
      </div>
    </section>

    <section className=''>
      
    <div className="div1">
            <div className="side-tri d-lg-block d-md-none d-none">
                <img src="side-tri.png"/>
            </div>
         </div>
    </section>
    
    {/* Why Section */}
    <section className='why position-relative d-flex flex-column why-bg'>
      <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="content col-lg-12 col-md-12 mx-auto col-sm-12">
            <h4>why choose us</h4>
          </div>
          <div className="col">
            <div className="border border-success border-1 opacity-100"></div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-1 class_child_div">
            <span className="line1"><img src="line.svg" /></span>
          </div>
          <div className="decade col-lg-5 col-md-5 col-12">
            <h2>Decades of experience, global reach, and a commitment to <span className='why-content'>excellence</span></h2>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4 col-md-4 col-12">
            <div className='global' >
              <img src="global.png" className="why-icon" />
            </div>
            <div className="icon-content mt-2">
              <h6>Global Expertise</h6>
              <p>Decades of experience across multiple sectors, providing tailored services</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className='global1'>
              <img src="setting.png" className="why-icon1" />
            </div>
            <div className="icon-content mt-2">
              <h6>End-to-End Solutions</h6>
              <p>Integrated services, from sourcing to full-scale development, streamlining operations and enhancing efficiency.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className='global' >
              <img src="bulb.png" className="why-icon2" />
            </div>
            <div className="icon-content mt-2">
              <h6>Global Expertise</h6>
              <p>Adoption of the latest technologies to offer cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    
    {/* Third Section */}
    <section className='position-relative d-flex flex-column bg-gray'>
    <div className="container py-5">
    <div className="row justify-content-center align-items-center">
      {/* Background Image Section */}
      <div className="col-lg-12 col-md-12 col-12">
        <div className="connect-image d-flex flex-column justify-content-center align-items-center ">
          <div className="overall">
            <div className="connect-content">
              <h2>
                The company was founded as a partnership to <br /> combine our expertise.
              </h2>
            </div>

            {/* List Section */}
            <div className="vector ">
              <ul className="align list-unstyled">
                <li className="d-flex align-items-center">
                  <img src="vector.png" className="vector-icon" />
                  <span className="vector-text">Global Ambition</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="vector.png" className="vector-icon" />
                  <span className="vector-text">Integrated Solutions</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="vector.png" className="vector-icon" />
                  <span className="vector-text">Emphasis on Expertise</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="vector.png" className="vector-icon" />
                  <span className="vector-text">Focus on Innovation & Sustainability</span>
                </li>
              </ul>
            </div>

            {/* Button Section */}
            <div className="connect-btn">
              <a href="#" className="btn2 px-4 py-2">Connect Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
    
    {/* Testimonial Section */}
    <section className='position-relative d-flex flex-column'>
    <div className="container py-5">
        {/* Logo Row */}
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-12 text-center">
            <img src="swaram.png" className="img-fluid" alt="Logo" />
          </div>
        </div>

        {/* Heading Section */}
        <div className="row align-items-center mt-4">
          <div className="col-auto">
            <div className="content">
              <h4>TESTIMONIALS</h4>
            </div>
          </div>
          <div className="col">
            <div className="border border-success border-1"></div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
          <div className="col-1 class_child_div">
                  <span className="line"><img src="line.svg" /></span>
                </div>
            <div className="col-11 test">
              <h2>What Our Customers Say</h2>
              <p>Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Financial Guidance</p>
            </div>

          </div>
        </div>


        {/* Bootstrap Carousel */}
        <div id="testimonialCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">

                  <div className="testimonial-card p-4 shadow-sm">
                    <img src="test-1.png" className="testimonial-img" alt="User 3" />
                    <h5 className="fw-bold">Grace Turner</h5>
                    <p className="text-muted">Director</p>
                    <p>Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community.</p>
                    <span className="quote-icon">❝</span>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="testimonial-card p-4 shadow-sm">
                    <img src="test-2.png" className="testimonial-img" alt="User 2" />
                    <h5 className="fw-bold">Linda Carter</h5>
                    <p className="text-muted">Analyst</p>
                    <p>Financial planning and investment advice I received from this team completely transformed my future. I couldn't be happier with the results.</p>
                    <span className="quote-icon">❝</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="testimonial-card p-4 shadow-sm">
                    <img src="test-1.png" className="testimonial-img" alt="User 3" />
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
                    <img src="test-2.png" className="testimonial-img" alt="User 4" />
                    <h5 className="fw-bold">Robert Williams</h5>
                    <p className="text-muted">CEO</p>
                    <p>Exceptional service! Their insights helped our business grow tremendously.</p>
                    <span className="quote-icon">❝</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="testimonial-card p-4 shadow-sm">
                    <img src="test-1.png" className="testimonial-img" alt="User 5" />
                    <h5 className="fw-bold">Emily Davis</h5>
                    <p className="text-muted">Marketing Lead</p>
                    <p>Professional, insightful, and dedicated to providing the best financial guidance.</p>
                    <span className="quote-icon">❝</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="testimonial-card p-4 shadow-sm">
                    <img src="test-2.png" className="testimonial-img" alt="User 6" />
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
    </section>
    </>

  )

}


export default Home;






