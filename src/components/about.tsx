import 'bootstrap/dist/css/bootstrap.min.css';




const About = () => {
  return (
    <>
      <img src="green-tri.png" alt=""
        className="green-tri position-absolute top-0 start-0"
        style={{ width: '30%', maxWidth: '280px', height: 'auto', objectFit: 'contain' }}
      />

      <section className='about-first-section mt-5'>
        <div className="container position-relative">
          <div className="row align-items-center mt-4">
            <div className="col-auto">
              <div className="content">
                <h4>About Us</h4>
              </div>
            </div>
            <div className="col">
              <div className="border border-success border-1"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-1 class_child_div">
              <span className="line"><img src="line.svg" /></span>
            </div>
            <div className="col-5">
              <h2 className="logic text-center text-md-start mt-3">
                Global Trading, Infrastructure, and Healthcare Solutions
              </h2>
              <p>Swaram is a global trading and service solutions company founded by industry veterans with 70 years of combined experience. Specializing in infrastructure, construction, logistics, energy, and healthcare, Swaram offers import/export, sourcing, project management, and renewable energy solutions across the Middle East, Asia, and Africa. Committed to integrity, innovation, sustainability, and excellence, the company thrives on its founders' expertise in finance and technical solutions.</p>
            </div>
            <div className="col-2">
              <div className=" ">
                <div className="counter">70<span>+</span></div>
                <p className="text-muted">Year of Combined Experience</p>
                <div className="counter">25<span>+</span></div>
                <p className="text-muted">Winning award best shipping company</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-12">
              <img src="cal.png" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row align-items-center mt-4">
            <div className="col-auto">
              <div className="content">
                <h4>Core values</h4>
              </div>
            </div>
            <div className="col">
              <div className="border border-success border-1"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-1 class_child_div">
              <span className="line"><img src="line.svg" /></span>
            </div>
            <div className="col-5">
              <h2 className="logic1 text-center text-md-start mt-3">
                Driving Global Trade with Innovation & Excellence
              </h2>
            </div>
            <div className="about-para col-lg-6 col-md-6 col-12">
              <p>Swaram is a dynamic and innovative global trading and service solutions company operating in infrastructure, construction, logistics, energy, healthcare, and general trading. We emphasize growth, strategic expansion, and long-term partnerships.</p>
            </div>
          </div>
          
        </div>
        <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Indicators (Three Dots at the Bottom) */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#cardCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#cardCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="d-flex justify-content-center">
            <div className="card mx-2 shadow p-3 rounded border-0" style={{ width: "400px" }}>
              <div className="card-body text-center">
                <div className="row">
                  <div className="col-2">
                  <div className="mb-3">
                  <img src="11.png" alt="Integrity" className="img-fluid" />
                </div>
                  </div>
                  <div className="col-6">
                  <h5 className="fw-bold">Integrity</h5>
                  </div>
                </div>
                
                
                <p className="mt-2 text-muted">
                  Conducting business with the highest ethical standards and transparency.
                </p>
              </div>
            </div>

            <div className="card mx-2 shadow p-3 rounded border-0" style={{ width: "400px" }}>
              <div className="card-body text-center">
                <div className="mb-3">
                  <img src="12.png" alt="Innovation" className="img-fluid" />
                </div>
                <h5 className="fw-bold">Innovation</h5>
                <p className="mt-2 text-muted">
                  Embracing the latest technologies and creative solutions to drive progress.
                </p>
              </div>
            </div>

            <div className="card mx-2 shadow p-3 rounded border-0" style={{ width: "400px" }}>
              <div className="card-body text-center">
                <div className="mb-3">
                  <img src="13.png" alt="Sustainability" className="img-fluid" />
                </div>
                <h5 className="fw-bold">Sustainability</h5>
                <p className="mt-2 text-muted">
                  Committed to environmentally and socially responsible business practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="d-flex justify-content-center">
            <div className="card mx-2 shadow p-3 rounded border-0" style={{ width: "400px" }}>
              <div className="card-body text-center">
                <div className="mb-3">
                  <img src="11.png" alt="Integrity" className="img-fluid" />
                </div>
                <h5 className="fw-bold">Integrity</h5>
                <p className="mt-2 text-muted">
                  Conducting business with the highest ethical standards and transparency.
                </p>
              </div>
            </div>

            <div className="card mx-2 shadow p-3 rounded border-0" style={{ width: "400px" }}>
              <div className="card-body text-center">
                <div className="mb-3">
                  <img src="12.png" alt="Innovation" className="img-fluid" />
                </div>
                <h5 className="fw-bold">Innovation</h5>
                <p className="mt-2 text-muted">
                  Embracing the latest technologies and creative solutions to drive progress.
                </p>
              </div>
            </div>

            <div className="card mx-2 shadow p-3 rounded border-0" style={{ width: "400px" }}>
              <div className="card-body text-center">
                <div className="mb-3">
                  <img src="13.png" alt="Sustainability" className="img-fluid" />
                </div>
                <h5 className="fw-bold">Sustainability</h5>
                <p className="mt-2 text-muted">
                  Committed to environmentally and socially responsible business practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="row align-items-center mt-4">
                <div className="col-auto">
                  <div className="content">
                    <h4>Mission Statement</h4>
                  </div>
                </div>
                <div className="col">
                  <div className="border border-success border-1"></div>
                </div>
              </div>
              <p>Swaram aims to lead the global trading industry by providing high-quality solutions that meet the diverse needs of businesses worldwide. Through innovation, collaboration, and sustainability, we bridge markets, foster international partnerships, and drive growth across sectors.</p>
            </div>
            <div className="sys col-lg-4 col-md-4 mx-auto col-12">
              <img src='system.png' />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <img src="plant.png" alt="description" />
            </div>
            <div className="col-lg-6 col-md-8 col-12">
              <div className="row align-items-center mt-4">
                <div className="col-auto">
                  <div className="content">
                    <h4>Vision Statement</h4>
                  </div>
                </div>
                <div className="col">
                  <div className="border border-success border-1"></div>
                </div>
                To become a globally recognized leader in general trading, infrastructure development, energy solutions, and healthcare, known for our commitment to reliability, innovation, and excellence. We aspire to contribute to the development of industries and the betterment of communities through sustainable, cutting-edge solutions and impactful operations
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gray'>
        <div className="container">
          <div className="row align-items-center mt-4">
            <div className="col-auto">
              <div className="content">
                <h4>Founders</h4>
              </div>
            </div>
            <div className="col">
              <div className="border border-success border-1"></div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="col-lg-12 col-md-12 col-12 ">
                <div className="founder d-flex flex-column">
                  <div className="overall">
                    <div className="connect-content">
                      <h2>The Finance Leader  <span className='leader'>(Founder)</span></h2>
                    </div>

                    {/* List Section */}
                    <div className="vector ">
                      <ul className="align list-unstyled">
                        <li className="d-flex">
                          <img src="vector.png" className="vector-icon" />
                          <span className="vector-text">Nearly 40 years of experience across various regions (India, Nigeria, Gabon, and Dubai)</span>
                        </li>
                        <li className="d-flex">
                          <img src="vector.png" className="vector-icon" />
                          <span className="vector-text">Expertise in financial leadership, strategic planning, and risk management.</span>
                        </li>
                        <li className="d-flex">
                          <img src="vector.png" className="vector-icon" />
                          <span className="vector-text">Successful management of multi-billion-dollar investments and large-scale infrastructure projects.</span>
                        </li>
                        <li className="d-flex">
                          <img src="vector.png" className="vector-icon" />
                          <span className="vector-text">Known for implementing financial systems, optimizing supply chains, and ensuring effective governance.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center mt-4">
            <div className="col-auto">
              <div className="content">
                <h4>Co-Founder</h4>
              </div>
            </div>
            <div className="col">
              <div className="border border-success border-1"></div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="col-lg-12 col-md-12 col-12 ">
                <div className="co-founder d-flex flex-column">
                  <div className="overall">
                    <div className="about">
                      <h2>The Power and Energy Leader <span className='leader'>(Co-Founder)</span></h2>
                    </div>

                    {/* List Section */}
                    <div className="vector ">
                      <ul className="align list-unstyled">
                        <li className="d-flex">
                          <span className="vector-text">Over 34 years of experience in power, energy, and infrastructure sectors.</span>
                          <img src="right-vector.png" className="vector-icon" />

                        </li>
                        <li className="d-flex">
                          <span className="vector-text">Experience with Voltas Limited (TATA), Kirloskar Power Equipment, Al Hamad International Trading, FKI plc, Technical Solutions, AADI International Trading FZE, and PRANSA International FZC.</span>
                          <img src="right-vector.png" className="vector-icon" />

                        </li>
                        <li className="d-flex">
                          <span className="vector-text">Extensive experience in energy solutions, infrastructure development, and global market expansion, particularly in the MEA region.</span>
                          <img src="right-vector.png" className="vector-icon" />

                        </li>
                      </ul>
                    </div>
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

export default About;
