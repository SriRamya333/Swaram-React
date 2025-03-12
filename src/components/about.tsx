import 'bootstrap/dist/css/bootstrap.min.css';




const About = () => {
  return (
    <>
      <img alt="" className="position-absolute top-0 end-0 d-none d-md-block" src="contact-green.png" />
      {/* Desktop */}
      <section className='about-first-section mt-5 d-none d-md-block'>
        <div className="container position-relative">
          <div className="row align-items-center mt-4">
            <div className="col-auto">
              <div className="content">
                <h4>About Us</h4>
              </div>
            </div>
            <div className="col-lg-1 col-md-1 col-12 d-none d-md-block">
              <div className="border border-success border-1"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1 d-none d-md-block class_child_div d-none d-md-block">
              <span className="line"><img src="line.svg" /></span>
            </div>
            <div className="col-lg-5 col-md-6 col-12 mob">
              <h2 className="logic text-center text-md-start mt-3">
                Global Trading, Infrastructure, and Healthcare Solutions
              </h2>
              <p>Swaram is a global trading and service solutions company founded by industry veterans with 70 years of combined experience. Specializing in infrastructure, construction, logistics, energy, and healthcare, Swaram offers import/export, sourcing, project management, and renewable energy solutions across the Middle East, Asia, and Africa. Committed to integrity, innovation, sustainability, and excellence, the company thrives on its founders' expertise in finance and technical solutions.</p>
            </div>
            <div className="col-lg-2 col-md-3 col-12 text-center text-md-start">
              <div className="counter">70<span>+</span></div>
              <p className="text-muted">Year of Combined Experience</p>
              <div className="counter">25<span>+</span></div>
              <p className="text-muted">Winning award best shipping company</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12 text-center">
              <img src="cal.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* Mobile */}
      <section className='about-first-section mt-5 d-block d-md-none'>
        <div className="container position-relative">
          <div className="row align-items-center mt-4">
            <div className="col-12 text-center">
              <div className="content1">
                <h4>About Us</h4>
              </div>
            </div>
            <div className="col-lg-1 col-md-1 col-12 d-none d-md-block">
              <div className="border border-success border-1"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1 d-none d-md-block class_child_div d-none d-md-block">
              <span className="line"><img src="line.svg" /></span>
            </div>
            <div className="col-lg-5 col-md-6 col-12 mob">
              <h2 className="logic text-center text-md-start mt-3">
                Global Trading, Infrastructure, and Healthcare Solutions
              </h2>
              <p>Swaram is a global trading and service solutions company founded by industry veterans with 70 years of combined experience. Specializing in infrastructure, construction, logistics, energy, and healthcare, Swaram offers import/export, sourcing, project management, and renewable energy solutions across the Middle East, Asia, and Africa. Committed to integrity, innovation, sustainability, and excellence, the company thrives on its founders' expertise in finance and technical solutions.</p>
            </div>
            <div className="col-lg-2 col-md-3 col-12 text-center text-md-start">
              <div className="counter">70<span>+</span></div>
              <p className="text-muted">Year of Combined Experience</p>
              <div className="counter">25<span>+</span></div>
              <p className="text-muted">Winning award best shipping company</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12 text-center">
              <img src="cal.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* Desktop */}
      <section className='mt-4 d-none d-md-block' style={{
        backgroundImage: "linear-gradient(to bottom, #B6D4FF, #FFFFFF)",
        borderTopRightRadius: "56%", borderTopLeftRadius: "56%"
      }}>
        <div className="container" >
          <div className="row align-items-center mt-4 text-center text-md-start" >
            <div className="col-lg-5 col-md-5"></div>
            <div className="col-auto content">
              <h4>Core values</h4>
            </div>
            <div className="col-2 d-none d-md-block">
              <div className="border border-success border-1 w-100 "></div>
            </div>
          </div>
          <div className="row mt-4 d-flex align-items-center text-center text-md-start">
            <div className="col-12 col-md-1 d-flex justify-content-center class_child_div d-none d-md-block">
              <span className="line"><img src="line.svg" /></span>
            </div>
            <div className="col-lg-5 col-md-5 col-12">
              <h2 className="logic1 text-center text-md-start mt-3">
                Driving Global Trade with Innovation & Excellence
              </h2>
            </div>
            <div className="about-para col-lg-6 col-md-6 col-12">
              <p>Swaram is a dynamic and innovative global trading and service solutions company operating in infrastructure, construction, logistics, energy, healthcare, and general trading. We emphasize growth, strategic expansion, and long-term partnerships.</p>
            </div>
          </div>
          <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
            {/* Indicators */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#cardCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#cardCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>

            {/* Carousel Inner */}
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="d-flex flex-wrap justify-content-center">
                  {[{
                    title: "Integrity",
                    description: "Conducting business with the highest ethical standards and transparency.",
                    img: "11.png",
                    bgColor: "#FAC5B4"
                  }, {
                    title: "Innovation",
                    description: "Embracing the latest technologies and creative solutions to drive progress.",
                    img: "13.png",
                    bgColor: "#DAFAFC"
                  }, {
                    title: "Sustainability",
                    description: "Committed to environmentally and socially responsible business practices.",
                    img: "12.png",
                    bgColor: "#C3DBFF"
                  }].map((card, index) => (
                    <div key={index} className="card m-2 shadow-sm p-3 rounded border-0" style={{ width: "350px" }}>
                      <div className="card-body text-center">
                        <div className="d-flex align-items-center">
                          <div className="p-2" style={{ background: card.bgColor, borderRadius: "5px" }}>
                            <img src={card.img} alt={card.title} />
                          </div>
                          <div className="ps-2">
                            <h6 className="fw-bold mb-0">{card.title}</h6>
                          </div>
                        </div>
                        <p className="mt-2 text-muted">{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="d-flex flex-wrap justify-content-center">
                  {[{
                    title: "Integrity",
                    description: "Conducting business with the highest ethical standards and transparency.",
                    img: "11.png",
                    bgColor: "#FAC5B4"
                  }, {
                    title: "Innovation",
                    description: "Embracing the latest technologies and creative solutions to drive progress.",
                    img: "13.png",
                    bgColor: "#DAFAFC"
                  }, {
                    title: "Sustainability",
                    description: "Committed to environmentally and socially responsible business practices.",
                    img: "12.png",
                    bgColor: "#C3DBFF"
                  }].map((card, index) => (
                    <div key={index} className="card m-2 shadow-sm p-3 rounded border-0" style={{ width: "350px" }}>
                      <div className="card-body text-center">
                        <div className="d-flex align-items-center">
                          <div className="p-2" style={{ background: card.bgColor, borderRadius: "5px" }}>
                            <img src={card.img} alt={card.title} />
                          </div>
                          <div className="ps-2">
                            <h6 className="fw-bold mb-0">{card.title}</h6>
                          </div>
                        </div>
                        <p className="mt-2 text-muted">{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className='mt-4 d-block d-md-none'>
        <div className="container" >
          <div className="row align-items-center mt-4 text-center text-md-start" >
            <div className="col-lg-5 col-md-5"></div>
            <div className="col-auto content1">
              <h4>Core values</h4>
            </div>
            <div className="col-2 d-none d-md-block">
              <div className="border border-success border-1"></div>
            </div>
          </div>
          <div className="row mt-4 d-flex align-items-center text-center text-md-start">
            <div className="col-12 col-md-1 d-flex justify-content-center class_child_div d-none d-md-block">
              <span className="line"><img src="line.svg" /></span>
            </div>
            <div className="col-lg-5 col-md-5 col-12">
              <h2 className="logic1 text-center text-md-start mt-3">
                Driving Global Trade with Innovation & Excellence
              </h2>
            </div>
            <div className="about-para col-lg-6 col-md-6 col-12">
              <p>Swaram is a dynamic and innovative global trading and service solutions company operating in infrastructure, construction, logistics, energy, healthcare, and general trading. We emphasize growth, strategic expansion, and long-term partnerships.</p>
            </div>
          </div>
          <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
            {/* Indicators */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#cardCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#cardCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>

            {/* Carousel Inner */}
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="d-flex flex-wrap justify-content-center">
                  {[{
                    title: "Integrity",
                    description: "Conducting business with the highest ethical standards and transparency.",
                    img: "11.png",
                    bgColor: "#FAC5B4"
                  }, {
                    title: "Innovation",
                    description: "Embracing the latest technologies and creative solutions to drive progress.",
                    img: "13.png",
                    bgColor: "#DAFAFC"
                  }, {
                    title: "Sustainability",
                    description: "Committed to environmentally and socially responsible business practices.",
                    img: "12.png",
                    bgColor: "#C3DBFF"
                  }].map((card, index) => (
                    <div key={index} className="card m-2 shadow-sm p-3 rounded border-0" style={{ width: "350px" }}>
                      <div className="card-body text-center">
                        <div className="d-flex align-items-center">
                          <div className="p-2" style={{ background: card.bgColor, borderRadius: "5px" }}>
                            <img src={card.img} alt={card.title} />
                          </div>
                          <div className="flex-grow-1 ps-2">
                            <h6 className="fw-bold mb-0">{card.title}</h6>
                          </div>
                        </div>
                        <p className="mt-2 text-muted">{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="d-flex flex-wrap justify-content-center">
                  {[{
                    title: "Integrity",
                    description: "Conducting business with the highest ethical standards and transparency.",
                    img: "11.png",
                    bgColor: "#FAC5B4"
                  }, {
                    title: "Innovation",
                    description: "Embracing the latest technologies and creative solutions to drive progress.",
                    img: "13.png",
                    bgColor: "#DAFAFC"
                  }, {
                    title: "Sustainability",
                    description: "Committed to environmentally and socially responsible business practices.",
                    img: "12.png",
                    bgColor: "#C3DBFF"
                  }].map((card, index) => (
                    <div key={index} className="card m-2 shadow-sm p-3 rounded border-0" style={{ width: "350px" }}>
                      <div className="card-body text-center">
                        <div className="d-flex align-items-center">
                          <div className="p-2" style={{ background: card.bgColor, borderRadius: "5px" }}>
                            <img src={card.img} alt={card.title} />
                          </div>
                          <div className="flex-grow-1 ps-2">
                            <h6 className="fw-bold mb-0">{card.title}</h6>
                          </div>
                        </div>
                        <p className="mt-2 text-muted">{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Desktop */}
      <section className='d-none d-md-block'>
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="row align-items-center mt-4 mb-4">
                <div className="col-auto content">
                  <h4>Mission Statement</h4>
                </div>
                <div className="col d-none d-md-block">
                  <div className="border border-success border-1"></div>
                </div>
              </div>
              <p>Swaram aims to lead the global trading industry by providing high-quality solutions that meet the diverse needs of businesses worldwide. Through innovation, collaboration, and sustainability, we bridge markets, foster international partnerships, and drive growth across sectors.</p>
            </div>
            <div className="sys col-lg-4 col-md-4 mx-auto col-12">
              <img src='system.png' className="img-fluid" alt="System" />
            </div>
          </div>
        </div>
      </section>

      <section className='d-none d-md-block'>
        <div className="container">
          <div className="row  align-items-center mt-4">
            <div className="col-lg-3 col-md-3 col-12 text-center">
              <img src="plant.png" className="img-fluid" alt="Plant" />
            </div>
            <div className='col-lg-1 col-md-1 col-12'></div>
            <div className="col-lg-6 col-md-8 col-12">
              <div className="row align-items-center mt-4 mb-4">
                <div className="col-auto content">
                  <h4>Vission Statement</h4>
                </div>
                <div className="col d-none d-md-block">
                  <div className="border border-success border-1"></div>
                </div>
              </div>
              <p> To become a globally recognized leader in general trading, infrastructure development, energy solutions, and healthcare, known for our commitment to reliability, innovation, and excellence. We aspire to contribute to the development of industries and the betterment of communities through sustainable, cutting-edge solutions and impactful operations</p>
            </div>
          </div>
        </div>
      </section>
      {/* Mobile */}
      <section className='d-block d-md-none'>
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="row align-items-center mt-4 mb-4">
                <div className="col-auto content1">
                  <h4>Mission Statement</h4>
                </div>
                <div className="col d-none d-md-block">
                  <div className="border border-success border-1"></div>
                </div>
              </div>
              <p>Swaram aims to lead the global trading industry by providing high-quality solutions that meet the diverse needs of businesses worldwide. Through innovation, collaboration, and sustainability, we bridge markets, foster international partnerships, and drive growth across sectors.</p>
            </div>
            <div className="sys col-lg-4 col-md-4 mx-auto col-12">
              <img src='system.png' className="img-fluid" alt="System" />
            </div>
          </div>
        </div>
      </section>
      <section className='d-block d-md-none'>
        <div className="container">
          <div className="row  align-items-center mt-4">

            <div className="col-lg-6 col-md-8 col-12">
              <div className="row align-items-center">
                <div className="col-auto content1">
                  <h4>Vission Statement</h4>
                </div>
                <div className="col d-none d-md-block">
                  <div className="border border-success border-1"></div>
                </div>
              </div>
              <p> To become a globally recognized leader in general trading, infrastructure development, energy solutions, and healthcare, known for our commitment to reliability, innovation, and excellence. We aspire to contribute to the development of industries and the betterment of communities through sustainable, cutting-edge solutions and impactful operations</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12 text-center">
              <img src="plant.png" className="img-fluid" alt="Plant" />
            </div>
          </div>
        </div>
      </section>

      {/* Desktop */}
      <section className='bg-gray d-none d-md-block'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5"></div>
            <div className="col-auto content">
              <h4>Founders</h4>
            </div>
            <div className="col d-none d-md-block">
              <div className="border border-success border-1"></div>
            </div>
          </div>
          <div className="row mt-4">
           
            <div className="col-lg-8 col-md-12 col-12 text-center mr-5">
              <div className="">
                <div className="overall">
                  <div className="connect-content">
                    <h2>The Finance Leader  <span className='leader'>(Founder)</span></h2>
                    <h2> <span className='leader'>Mr K Swaminathan
                    </span></h2>
                  </div>
                  <div className="vector w-100">
                    <ul className="list-unstyled d-flex flex-column align-items-center align-items-md-start w-100">
                      <li className="d-flex align-items-center mb-4 w-100">
                        <img src="vector.png" className="vector-icon me-2" />
                        <span className="vector-text flex-grow-1 text-center text-md-start">Nearly 40 years of experience across various regions (India, Nigeria, Gabon, and Dubai)</span>
                      </li>
                      <li className="d-flex align-items-center mb-4 w-100">
                        <img src="vector.png" className="vector-icon me-2" />
                        <span className="vector-text flex-grow-1 text-center text-md-start">Expertise in financial leadership, strategic planning, and risk management.</span>
                      </li>
                      <li className="d-flex align-items-center mb-4 w-100">
                        <img src="vector.png" className="vector-icon me-2" />
                        <span className="vector-text flex-grow-1 text-center text-md-start">Successful management of multi-billion-dollar investments and large-scale infrastructure projects.</span>
                      </li>
                      <li className="d-flex align-items-center mb-4 w-100">
                        <img src="vector.png" className="vector-icon me-2" />
                        <span className="vector-text flex-grow-1 text-center text-md-start">Known for implementing financial systems, optimizing supply chains, and ensuring effective governance.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
             
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="d-flex flex-column align-items-middle">
                    <div className="overall">
                      <div className="connect-content">
                        <h2>The Power and Energy Leader <span className='leader'>(Co-Founder)</span></h2>
                        <h2> <span className='leader'>Mr K Ramasubramanian</span></h2>
                      </div>

                      <div className="vector w-100">
                        <ul className="list-unstyled d-flex flex-column align-items-center align-items-md-start w-100">
                          <li className="d-flex align-items-center mb-4 w-100">
                            <img src="vector.png" className="vector-icon me-2" />
                            <span className="vector-text flex-grow-1 text-center text-md-start">Over 34 years of experience in power, energy, and infrastructure sectors.</span>
                          </li>
                          <li className="d-flex align-items-center mb-4 w-100">
                            <img src="vector.png" className="vector-icon me-2" />
                            <span className="vector-text flex-grow-1 text-center text-md-start">Experience with Voltas Limited (TATA), Kirloskar Power Equipment, Al Hamad International Trading, FKI plc, Technical Solutions, AADI International Trading FZE, and PRANSA International FZC.</span>
                          </li>
                          <li className="d-flex align-items-center mb-4 w-100">
                            <img src="vector.png" className="vector-icon me-2" />
                            <span className="vector-text flex-grow-1 text-center text-md-start">Extensive experience in energy solutions, infrastructure development, and global market expansion, particularly in the MEA region.</span>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <img src="man.png" />
            </div>
          </div>
        </div>
      </section>
      {/* Mobile */}
      <section className='bg-gray d-block d-md-none'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5"></div>
            <div className="col-auto content1">
              <h4>Founders</h4>
            </div>
            <div className="col d-none d-md-block">
              <div className="border border-success border-1"></div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-8 col-md-12 col-12 text-center mr-5">
              <div className="">
                <div className="overall">
                  <div className="connect-content">
                    <h2>The Finance Leader  <span className='leader'>(Founder)</span></h2>
                    <h2> <span className='leader'>Mr K Swaminathan
                    </span></h2>
                  </div>
                  <div className="vector w-100">
                    <ul className="list-unstyled d-flex flex-column align-items-center align-items-md-start w-100">
                      <li className="d-flex align-items-center mb-4 w-100">
                        <img src="vector.png" className="vector-icon me-2" />
                        <span className="vector-text flex-grow-1 text-center text-md-start">Nearly 40 years of experience across various regions (India, Nigeria, Gabon, and Dubai)</span>
                      </li>
                      <li className="d-flex align-items-center mb-4 w-100">
                        <img src="vector.png" className="vector-icon me-2" />
                        <span className="vector-text flex-grow-1 text-center text-md-start">Expertise in financial leadership, strategic planning, and risk management.</span>
                      </li>
                      <li className="d-flex align-items-center mb-4 w-100">
                        <img src="vector.png" className="vector-icon me-2" />
                        <span className="vector-text flex-grow-1 text-center text-md-start">Successful management of multi-billion-dollar investments and large-scale infrastructure projects.</span>
                      </li>
                      <li className="d-flex align-items-center mb-4 w-100">
                        <img src="vector.png" className="vector-icon me-2" />
                        <span className="vector-text flex-grow-1 text-center text-md-start">Known for implementing financial systems, optimizing supply chains, and ensuring effective governance.</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="d-flex flex-column align-items-middle">
                    <div className="overall">
                      <div className="connect-content">
                        <h2>The Power and Energy Leader <span className='leader'>(Co-Founder)</span></h2>
                        <h2> <span className='leader'>Mr K Ramasubramanian</span></h2>
                      </div>

                      <div className="vector w-100">
                        <ul className="list-unstyled d-flex flex-column align-items-center align-items-md-start w-100">
                          <li className="d-flex align-items-center mb-4 w-100">
                            <img src="vector.png" className="vector-icon me-2" />
                            <span className="vector-text flex-grow-1 text-center text-md-start">Over 34 years of experience in power, energy, and infrastructure sectors.</span>
                          </li>
                          <li className="d-flex align-items-center mb-4 w-100">
                            <img src="vector.png" className="vector-icon me-2" />
                            <span className="vector-text flex-grow-1 text-center text-md-start">Experience with Voltas Limited (TATA), Kirloskar Power Equipment, Al Hamad International Trading, FKI plc, Technical Solutions, AADI International Trading FZE, and PRANSA International FZC.</span>
                          </li>
                          <li className="d-flex align-items-center mb-4 w-100">
                            <img src="vector.png" className="vector-icon me-2" />
                            <span className="vector-text flex-grow-1 text-center text-md-start">Extensive experience in energy solutions, infrastructure development, and global market expansion, particularly in the MEA region.</span>
                          </li>
                        </ul>
                      </div>

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
