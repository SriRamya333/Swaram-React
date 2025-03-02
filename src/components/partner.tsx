import 'bootstrap/dist/css/bootstrap.min.css';




const Partner = () => {
  return (
    <>

      <section className='partner-bg'>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 partner-title">
              <h2><span className='better-1'>Partner with Swaram:</span> Driving Growth & Innovation Together</h2>
              <p>Join us in shaping the future of global trade, infrastructure, energy, and healthcare through strategic partnerships and innovation</p>
            </div>
            <div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-section position-relative d-flex flex-column'>
        <div className="container">
          <div className="row align-items-center mt-4">
            <div className="col-auto">
              <div className="content">
                <h4>Key Themes and Take aways</h4>
              </div>
            </div>
            <div className="col">
              <div className="border border-success border-1"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="col d-flex align-items-center">
                <img src="dollar.png" className="me-2" style={{ width: "30px", height: "30px" }} />
                <p className="part mb-0">Global Ambition</p>
              </div>
              <p>Swaram is positioned as a globally oriented company with aspirations to be a leader in its chosen sectors</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="col d-flex align-items-center">
                <img src="house.png" className="me-2" style={{ width: "30px", height: "30px" }} />
                <p className="part mb-0">Integrated Solutions</p>
              </div>
              <p>Our strength lies in offering end-to-end, integrated services across various disciplines, providing streamlined solutions for clients.</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="col d-flex align-items-center">
                <img src="office.png" className="me-2" style={{ width: "30px", height: "30px" }} />
                <p className="part mb-0">Emphasis on Expertise</p>
              </div>
              <p>The founders' decades of experience are a core asset driving the company’s capabilities.</p>
            </div>
          </div>
          <div className="row mt-4">

            <div className="col-lg-6 col-md-6 col-12">
              <div className="col d-flex align-items-center">
                <img src="cycle.png" className="me-2" style={{ width: "30px", height: "30px" }} />
                <p className="part mb-0">Focus on Innovation & Sustainability</p>
              </div>
              <p>Swaram is committed to both technological advancement and environmentally responsible practices.</p>
            </div>
          </div>
        </div>
        <img src="bg-green-1.png" alt=""
          className="color-img position-absolute top-0 end-0"
          style={{ width: '50%', maxWidth: '280px', height: 'auto', objectFit: 'contain' }}
        />
      </section>


      <section>
        <div className="container">
          <div className="row align-items-center mt-4">
            <div className="col-auto">
              <div className="content">
                <h4>Market Potential & Outlook</h4>
              </div>
            </div>
            <div className="col">
              <div className="border border-success border-1"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="vector ">
                <ul className="align list-unstyled">
                  <li className="d-flex align-items-center">
                    <img src="growth.png" className="vector-icon" />
                    <p>Swaram is well-positioned to attract large-scale, international clients due to its diverse service offerings and global presence.</p>
                  </li>
                  <li className="d-flex align-items-center">
                    <img src="growth.png" className="vector-icon" />
                    <p>The combination of financial and technical leadership allows for a holistic approach to projects, from conception through to completion.</p>
                  </li>
                  <li className="d-flex align-items-center">
                    <img src="growth.png" className="vector-icon" />
                    <p>Our commitment to sustainability resonates with increasingly environmentally conscious markets.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <img src="data.png" alt="description" />
            </div>
          </div>
        </div>
      </section>



      <section className='position-relative d-flex flex-column bg-gray'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-auto">
              <div className="content">
                <h4>Key Themes and Take aways</h4>
              </div>
            </div>
            <div className="col">
              <div className="border border-success border-1"></div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">

            {/* Background Image Section */}
            <div className="col-lg-12 col-md-12 col-12">
              <div className="connect-image d-flex flex-column justify-content-center align-items-center ">
                <div className="overall">
                  <div className="connect-content">
                    <h2>
                      Let’s Work Together
                    </h2>
                  </div>
                  <div>
                    <p className='success'>🤝 Our Success in Numbers</p>
                  </div>

               
               

                  {/* Button Section */}
                  <div className="connect-btn">
                    <a href="#" className="btn2 px-4 py-2">Submit</a>
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

export default Partner;
