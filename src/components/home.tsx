import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  return (
    <>
{/* Desktop */}
      <section className='home-section position-relative d-flex flex-column d-none d-md-block'>
        <img src="bg-green-1.png" alt=""
          className="color-img position-absolute top-0 end-0"
        />

        <img src="green-tri.png" alt=""
          className="green-tri position-absolute top-0 start-0"
        />

        <img src="Frame-3.png" alt=""
          className="img-frame position-absolute bottom-0 start-0"
          
        />

        <img src="Frame-4.png" alt=""
          className="img-frame1 position-absolute bottom-0 end-0"
          
        />
        {/* Container for Content */}
        <div className='container position-relative d-flex flex-column align-items-center text-center py-5'>
          {/* Content */}
          <div className='row justify-content-center w-100 position-relative' style={{ zIndex: 1 }}>
            <div className='col-lg-10 col-md-12 col-12'>
              <div className='bg-text mt-5'>
                <h3 className="text-center ">Shaping the Future of Global Trade & Services</h3>
              </div>
              <div className='para-text'>
                <p >Explore our solutions in Infrastructure, Logistics, Energy, and Trading.</p>
              </div>

              {/* Buttons */}
              <div className='d-flex flex-wrap justify-content-center gap-3 mt-3'>
                <div className="para-button">
                  <a href='service' target="_blank" className='btn px-4 py-2' rel="noopener noreferrer">Discover More</a>
                </div>
                <div className="para-button1">
                  <a href='contact-us' target="_blank" className='btn px-4 py-2'  rel="noopener noreferrer">Contact Us</a>
                </div>
              </div>

              {/* Image Section */}
              <div className='row mt-5 justify-content-center'>
                <div className='img col-md-12 col-10 d-flex justify-content-center'>
                  <img src='Group-1.png' alt='Description' className='img-fluid' style={{ maxWidth: '100%', height: 'auto' }} />
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
              width: '52vh',
            }}
          />
        </div>
      </section>
{/* Mobile */}
<section className='home-section position-relative d-flex flex-column d-block d-md-none'>
        {/* Container for Content */}
        <div className='container position-relative d-flex flex-column align-items-center text-center pt-4'>
          {/* Content */}
          <div className='row justify-content-center w-100 position-relative' style={{ zIndex: 1 }}>
            <div className='col-lg-10 col-md-12 col-12'>
              <div className='bg-text mt-5'>
                <h3 className="text-center ">Shaping the Future of Global Trade & Services</h3>
              </div>
              <div className='para-text'>
                <p >Explore our solutions in Infrastructure, Logistics, Energy, and Trading.</p>
              </div>

              {/* Buttons */}
              <div className='d-flex flex-wrap justify-content-center gap-3 mt-3'>
                <div className="para-button">
                  <a href='service' className='btn px-4 py-2'>Discover More</a>
                </div>
                <div className="para-button1">
                  <a href='contact-us' className='btn px-4 py-2'>Contact Us</a>
                </div>
              </div>

              {/* Image Section */}
              <div className='row mt-5 justify-content-center'>
                <div className='img col-md-6 col-10 d-flex justify-content-center'>
                  <img src='Group-1.png' alt='Description' className='img-fluid' style={{ maxWidth: '100%', height: 'auto' }} />
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
              width: '52vh',
            }}
          />
        </div>
      </section>

      {/* Future Section */}
      {/* Desktop */}
      <section className="position-relative d-flex flex-column d-none d-md-block">
        <div className="oval">
          <div className="container">
            <div className="popular text-center">
              <h2 className="text-center ">We Featured on Popular Partners Like</h2>
            </div>
            <div className="row text-center mt-5 justify-content-center align-items-center">
              <div className="col-lg-3 col-md-4 col-12 mb-4">
                <img src="Fortune.png" className="img-fluid partner-logo" alt="Fortune" />
              </div>
              <div className="col-lg-3 col-md-4 col-12 mb-4">
                <img src="Forbes.png" className="img-fluid partner-logo" alt="Forbes" />
              </div>
              <div className="col-lg-3 col-md-4 col-12 mb-4">
                <img src="invest-detroit.png" className="img-fluid partner-logo" alt="Invest Detroit" />
              </div>
              <div className="col-lg-3 col-md-4 col-12 mb-4">
                <img src="Robinhood.png" className="img-fluid partner-logo" alt="Robinhood" />
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Mobile */}
      <section className="position-relative d-flex flex-column d-block d-md-none">
        <div className="">
          <div className="container">
            <div className="popular text-center">
              <h2 className="text-center ">We Featured on Popular Partners Like</h2>
            </div>
            <div className="row text-center mt-5 justify-content-center align-items-center">
              <div className="col-lg-3 col-md-4 col-6 mb-4">
                <img src="Fortune.png" className="img-fluid partner-logo" alt="Fortune" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 mb-4">
                <img src="Forbes.png" className="img-fluid partner-logo" alt="Forbes" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 mb-4">
                <img src="invest-detroit.png" className="img-fluid partner-logo" alt="Invest Detroit" />
              </div>
              <div className="col-lg-3 col-md-4 col-6 mb-4">
                <img src="Robinhood.png" className="img-fluid partner-logo" alt="Robinhood" />
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Desktop */}
      {/* Our Services Section */}
      <section className="position-relative d-flex flex-column d-none d-md-block">
        <div className="container-fluid bg position-relative py-5">
          <div className="container">
            <div className="row align-items-center">
              {/* Image Section */}
              <div className="col-lg-6 col-md-6 col-12 text-center text-md-start mt-3">
                <img src="graph.png" className="img-fluid w-75" alt="Graph" />
              </div>

              {/* Content Section */}
              <div className="col-lg-6 col-md-6 col-12 mt-4 mt-md-0">
                {/* Section Header */}
                <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                  <div className="content">
                    <h4 className="fw-bold">OUR SERVICES</h4>
                  </div>
                  <div className="border border-success border-1 opacity-100 ms-3 d-none d-md-block">

                  </div>
                </div>

                {/* Title */}
                <div className="row">
                  <div className="col-1 class_child_div d-none d-md-block">
                    <span className="line"><img src="line.svg" alt="Line" /></span>
                  </div>
                  <div className="col-11">
                    <h2 className="logic text-center text-md-start mt-3 responsive-heading">
                      Explore our expertise in Trading, Infrastructure, Logistics, and Energy
                    </h2>
                  </div>
                </div>

                {/* Service List */}
                <div className="mt-4">
                  <div className="row row-cols-1 row-cols-md-2 g-3">
                    <div className="col d-flex align-items-center">
                      <img src="dollar.png" className="me-2 service-icon" alt="Dollar Icon" />
                      <p className="trade mb-0">Global Trading</p>
                    </div>
                    <div className="col d-flex align-items-center">
                      <img src="coin.png" className="me-2 service-icon" alt="Coin Icon" />
                      <p className="trade mb-0">Logistics & Supply Chain Management</p>
                    </div>
                    <div className="col d-flex align-items-center">
                      <img src="house.png" className="me-2 service-icon" alt="House Icon" />
                      <p className="trade mb-0">Energy Solutions</p>
                    </div>
                    <div className="col d-flex align-items-center">
                      <img src="office.png" className="me-2 service-icon" alt="Office Icon" />
                      <p className="trade mb-0">Infrastructure & Construction</p>
                    </div>
                  </div>
                </div>

                {/* Explore Button */}
                <div className="explore d-flex justify-content-center justify-content-md-start mt-4">
                  <a href="service" target="_blank" className="btn mt-2 px-4 py-2">Explore Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div className="bg-overlay"></div>

      </section>

{/* Mobile */}

<section className="position-relative d-flex flex-column d-block d-md-none">
        <div className="container-fluid position-relative">
          <div className="container">
            <div className="row align-items-center">
              {/* Image Section */}
             

              {/* Content Section */}
              <div className="col-lg-6 col-md-6 col-12 mt-4 mt-md-0">
                {/* Section Header */}
                <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                  <div className="content">
                    <h4 className="fw-bold">OUR SERVICES</h4>
                  </div>
                  <div className="border border-success border-1 opacity-100 ms-3 d-none d-md-block">

                  </div>
                </div>

                {/* Title */}
                <div className="row">
                  <div className="col-1 class_child_div d-none d-md-block">
                    <span className="line"><img src="line.svg" alt="Line" /></span>
                  </div>
                  <div className="col-11">
                    <h2 className="logic text-center text-md-start mt-3 responsive-heading">
                      Explore our expertise in Trading, Infrastructure, Logistics, and Energy
                    </h2>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 text-center text-md-start mt-3">
                <img src="graph.png" className="img-fluid w-75" alt="Graph" />
              </div>

                {/* Service List */}
                <div className="mt-4">
                  <div className="row row-cols-1 row-cols-md-2 g-3">
                    <div className="col d-flex align-items-center">
                      <img src="dollar.png" className="me-2 service-icon" alt="Dollar Icon" />
                      <p className="trade mb-0">Global Trading</p>
                    </div>
                    <div className="col d-flex align-items-center">
                      <img src="coin.png" className="me-2 service-icon" alt="Coin Icon" />
                      <p className="trade mb-0">Logistics & Supply Chain Management</p>
                    </div>
                    <div className="col d-flex align-items-center">
                      <img src="house.png" className="me-2 service-icon" alt="House Icon" />
                      <p className="trade mb-0">Energy Solutions</p>
                    </div>
                    <div className="col d-flex align-items-center">
                      <img src="office.png" className="me-2 service-icon" alt="Office Icon" />
                      <p className="trade mb-0">Infrastructure & Construction</p>
                    </div>
                  </div>
                </div>

                {/* Explore Button */}
                <div className="explore d-flex justify-content-center justify-content-md-start mt-4">
                  <a href="service" className="btn mt-2 px-4 py-2">Explore Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div className="bg-overlay"></div>

      </section>
{/* Desktop */}
      {/* Why Section */}
      <section className="why position-relative d-flex flex-column why-bg d-none d-md-block">
        <div className="side-tri d-lg-block d-md-none d-none">
          <img src="side-tri.png" className="img-fluid" />
        </div>
        <div className="container">
          {/* Title Section */}
          <div className="row align-items-center">
            <div className="col-5">
            </div>
            <div className="content col-lg-12 col-md-12 mx-auto col-sm-12">
              <h4>Why Choose Us</h4>
            </div>
            <div className="col d-none d-md-block">
              <div className="border border-success border-1 opacity-100">
              </div>
            </div>
          </div>

          {/* Subtitle Section */}
          <div className="row mt-3 align-items-center text-center text-md-start">
            <div className="col-auto d-none d-md-block">
              <img src="line.svg" className="line1 img-fluid" />
            </div>
            <div className="decade col-lg-5 col-md-5 col-12">
              <h2 className="fw-bold">
                Decades of experience, global reach, and a commitment to <span className="why-content">excellence</span>
              </h2>
            </div>
          </div>

          {/* Features Section */}
          <div className="row mt-4 text-center text-md-start">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="global">
                <img src="global.png" className="why-icon img-fluid" />
              </div>
              <div className="icon-content mt-2">
                <h6 className="fw-bold">Global Expertise</h6>
                <p>Decades of experience across multiple sectors, providing tailored services</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="global1">
                <img src="setting.png" className="why-icon1 img-fluid" />
              </div>
              <div className="icon-content mt-2">
                <h6 className="fw-bold">End-to-End Solutions</h6>
                <p>Integrated services, from sourcing to full-scale development, streamlining operations and enhancing efficiency.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="global">
                <img src="bulb.png" className="why-icon2 img-fluid" />
              </div>
              <div className="icon-content mt-2">
                <h6 className="fw-bold">Cutting-Edge Innovation</h6>
                <p>Adoption of the latest technologies to offer cutting-edge solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="why position-relative d-flex flex-column why-bg d-block d-md-none">
        <div className="side-tri d-lg-block d-md-none d-none">
          <img src="side-tri.png" className="img-fluid" />
        </div>
        <div className="container">
          {/* Title Section */}
          <div className="row align-items-center mt-4">
            <div className="col-1">
            </div>
            <div className="content col-lg-12 col-md-12 mx-auto col-sm-12">
              <h4>Why Choose Us</h4>
            </div>
            <div className="col d-none d-md-block">
              <div className="border border-success border-1 opacity-100">
              </div>
            </div>
          </div>

          {/* Subtitle Section */}
          <div className="row mt-3 align-items-center text-center text-md-start">
            <div className="col-auto d-none d-md-block">
              <img src="line.svg" className="line1 img-fluid" />
            </div>
            <div className="decade col-lg-5 col-md-5 col-12">
              <h2 className="fw-bold">
                Decades of experience, global reach, and a commitment to <span className="why-content">excellence</span>
              </h2>
            </div>
          </div>

          {/* Features Section */}
          <div className="row mt-4 text-center text-md-start">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="global">
                <img src="global.png" className="why-icon img-fluid" />
              </div>
              <div className="icon-content mt-2">
                <h6 className="fw-bold">Global Expertise</h6>
                <p>Decades of experience across multiple sectors, providing tailored services</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="global1">
                <img src="setting.png" className="why-icon1 img-fluid" />
              </div>
              <div className="icon-content mt-2">
                <h6 className="fw-bold">End-to-End Solutions</h6>
                <p>Integrated services, from sourcing to full-scale development, streamlining operations and enhancing efficiency.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="global">
                <img src="bulb.png" className="why-icon2 img-fluid" />
              </div>
              <div className="icon-content mt-2">
                <h6 className="fw-bold">Cutting-Edge Innovation</h6>
                <p>Adoption of the latest technologies to offer cutting-edge solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop */}
      {/* Third Section */}
      <section className="position-relative d-flex flex-column bg-gray d-none d-md-block">
        <div className="container pb-5">
          <div className="row justify-content-center align-items-center text-center text-md-start">
            {/* Background Image Section */}
            <div className="col-lg-12 col-md-12 col-12">
              <div className="connect-image d-flex flex-column justify-content-center align-items-center w-100">
                <div className="overall w-100 px-3 px-md-5 d-flex flex-column align-items-center align-items-md-start">

                  {/* Heading Section */}
                  <div className="connect-content mb-3 text-center text-md-start">
                    <h2 className="fw-bold text-wrap text-break">
                      The company was founded as a partnership to <br className="d-none d-md-block" /> combine our expertise.
                    </h2>
                  </div>

                  {/* List Section */}
                  <div className="vector w-100">
                    <ul className="list-unstyled d-flex flex-column align-items-center align-items-md-start w-100">
                      <li className="d-flex align-items-center mb-2 w-100">
                        <img src="vector.png" className="vector-icon me-2"/>
                        <span className="vector-text flex-grow-1 text-center text-md-start">Global Ambition</span>
                      </li>
                      <li className="d-flex align-items-center mb-2 w-100">
                        <img src="vector.png" className="vector-icon me-2"/>
                        <span className="vector-text flex-grow-1 text-center text-md-start">Integrated Solutions</span>
                      </li>
                      <li className="d-flex align-items-center mb-2 w-100">
                        <img src="vector.png" className="vector-icon me-2"/>
                        <span className="vector-text flex-grow-1 text-center text-md-start">Emphasis on Expertise</span>
                      </li>
                      <li className="d-flex align-items-center mb-2 w-100">
                        <img src="vector.png" className="vector-icon me-2"/>
                        <span className="vector-text flex-grow-1 text-center text-md-start">Focus on Innovation & Sustainability</span>
                      </li>
                    </ul>
                  </div>

                  {/* Button Section */}
                  <div className="connect-btn text-center text-md-start">
                    <a href="partner" target="_blank" className="btn2 px-4 py-2">Connect Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Mobile */}
      <section className="position-relative d-flex flex-column bg-gray d-block d-md-none">
        <div className="container">
          <div className="row justify-content-center align-items-center text-center text-md-start">
            {/* Background Image Section */}
            <div className="col-lg-12 col-md-12 col-12">
              <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <div className="w-100 px-3 px-md-5 d-flex flex-column align-items-center align-items-md-start">

                  {/* Heading Section */}
                  <div className="connect-content mb-3 text-center text-md-start">
                    <h2 className="fw-bold text-wrap text-break">
                      The company was founded as a partnership to <br className="d-none d-md-block" /> combine our expertise.
                    </h2>
                  </div>

                  {/* List Section */}
                  <div className="vector w-100">
                    <ul className="list-unstyled d-flex flex-column align-items-center align-items-md-start w-100">
                      <li className="d-flex align-items-center mb-2 w-100">
                        <img src="vector.png" className="vector-icon img-fluid me-2"  />
                        <span className="vector-text text-md-start">Global Ambition</span>
                      </li>
                      <li className="d-flex align-items-center mb-2 w-100">
                        <img src="vector.png" className="vector-icon img-fluid me-2"  />
                        <span className="vector-text text-md-start">Integrated Solutions</span>
                      </li>
                      <li className="d-flex align-items-center mb-2 w-100">
                        <img src="vector.png" className="vector-icon img-fluid me-2"  />
                        <span className="vector-text text-md-start">Emphasis on Expertise</span>
                      </li>
                      
                      <li className="d-flex align-items-center mb-2 w-100">
                        <img src="vector.png" className="vector-icon img-fluid me-2"  />
                        <span className="vector-text text-md-start">Focus on Innovation & Sustainability</span>
                      </li>
                    </ul>
                  </div>

                  {/* Button Section */}
                  <div className="connect-btn text-center text-md-start">
                    <a href="partner" className="btn2">Connect Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonial Section */}
      <section className='position-relative d-flex flex-column'>
        <div className="container">
          {/* Logo Row */}
          <div className="row">
            <div className="col-lg-12 load">
              <img src="swaram.png" className="img-fluid" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>

          {/* Heading Section */}
          <div className="row align-items-center mt-4 mb-4">
            <div className="col-auto content1">
              <h4>TESTIMONIALS</h4>
            </div>
            <div className="col d-none d-md-block">
              <div className="border border-success border-1"></div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row">
              <div className="col-1 class_child_div d-none d-md-block">
                <span className="line"><img src="line.svg" /></span>
              </div>
              <div className="col-lg-11 col-md-11 col-12 test">
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

                
                    <div className="testimonial-card p-4 shadow">
                      <div className="row">
                        {/* <div className="col-3">
                          <img src="test-2.png" className="testimonial-img" alt="User 2" />
                        </div> */}
                        <div className="col-6">
                          <h5 className="fw-bold">Rahul Mehta</h5>
                          <p className="text-muted"> ⭐⭐⭐⭐⭐</p>
                        </div>
                      </div>
                      <p>I've been using Swaram Logistics for over a year now, and they never disappoint! My shipments always arrive on time, and their team is super professional. Highly recommend them!</p>
                      <span className="quote-icon">❝</span>
                    </div>
                  
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="testimonial-card p-4 shadow">
                      <div className="row">
                        {/* <div className="col-3">
                          <img src="test-2.png" className="testimonial-img" alt="User 2" />
                        </div> */}
                        <div className="col-6">
                          <h5 className="fw-bold">Priya Sharma</h5>
                          <p className="text-muted"> ⭐⭐⭐⭐⭐</p>
                        </div>
                      </div>
                      <p>I’ve been using Swaram Logistics for months now, and they’ve never let me down. Whether it's local deliveries or interstate shipments, they handle everything seamlessly. Great job, team!</p>
                      <span className="quote-icon">❝</span>
                    </div>
                  </div>
                  

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="testimonial-card p-4 shadow">
                      <div className="row">
                        {/* <div className="col-3">
                          <img src="test-2.png" className="testimonial-img" alt="User 2" />
                        </div> */}
                        <div className="col-6">
                          <h5 className="fw-bold">Arjun Verma</h5>
                          <p className="text-muted">⭐⭐⭐⭐⭐</p>
                        </div>
                      </div>
                      <p>Had an urgent delivery that I was worried about, but Swaram Logistics handled it perfectly. Their support team kept me updated throughout. Truly impressive!</p>
                      <span className="quote-icon">❝</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="testimonial-card p-4 shadow">
                      <div className="row">
                        {/* <div className="col-3">
                          <img src="test-2.png" className="testimonial-img" alt="User 2" />
                        </div> */}
                        <div className="col-6">
                          <h5 className="fw-bold">Neha Patel</h5>
                          <p className="text-muted">⭐⭐⭐⭐⭐</p>
                        </div>
                      </div>
                      <p>Great service at a great price! Swaram Logistics delivered my package earlier than expected, and the staff was incredibly courteous.</p>
                      <span className="quote-icon">❝</span>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="testimonial-card p-4 shadow">
                      <div className="row">
                        {/* <div className="col-3">
                          <img src="test-2.png" className="testimonial-img" alt="User 2" />
                        </div> */}
                        <div className="col-6">
                          <h5 className="fw-bold">Vikram Nair</h5>
                          <p className="text-muted">⭐⭐⭐⭐⭐</p>
                        </div>
                      </div>
                      <p>I was amazed by their attention to detail. The driver was polite, and my fragile items arrived safely. Swaram Logistics is now my top choice.</p>
                      <span className="quote-icon">❝</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="testimonial-card p-4 shadow">
                      <div className="row">
                        {/* <div className="col-3">
                          <img src="test-2.png" className="testimonial-img" alt="User 2" />
                        </div> */}
                        <div className="col-6">
                          <h5 className="fw-bold">Kavita Iyer</h5>
                          <p className="text-muted">⭐⭐⭐⭐⭐</p>
                        </div>
                      </div>
                      <p>I run a small business, and Swaram Logistics has been a game-changer. Their reliable service has improved my delivery timelines significantly.</p>
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






