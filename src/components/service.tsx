import 'bootstrap/dist/css/bootstrap.min.css';




const Service = () => {
  return (
    <>
{/* Desktop */}
      <section className='home-section position-relative d-flex flex-column d-none d-md-block' id="service-bg">
        <img src="service-green-tri.png" alt=""
          className="green-tri-1 position-absolute top-0 end-0"

        />
        <img src="bg-green-1.png" alt=""
          className="color-img position-absolute top-0 end-0"
          style={{ width: '50%', maxWidth: '280px', height: 'auto', objectFit: 'contain' }}
        />
        <div className="container mt-5">
          <div className="row mt-3">
            <div className="col-lg-4 col-md-4 col-12 first-image">
              <img src="service-image1.png" alt="description" />
            </div>
            <div className="col-lg-8 col-md-8 col-12 service-text">
              <h2>Comprehensive Global Solutions for a</h2><span className='better'>Better Tomorrow</span>
              <div className='context'>
                <p>Empowering industries worldwide with tailored solutions—from global trading and infrastructure to renewable energy and healthcare. Partner with us for seamless operations and sustainable growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile */}

      <section className='home-section position-relative d-flex flex-column d-block d-md-none' id="service-bg">
        <div className="container mt-5">
          <div className="row mt-3">
            <div className="col-lg-4 col-md-4 col-12 first-image">
              <img src="service-image1.png" alt="description" />
            </div>
            <div className="col-lg-8 col-md-8 col-12 service-text">
              <h2>Comprehensive Global Solutions for a</h2><span className='better'>Better Tomorrow</span>
              <div className='context'>
                <p>Empowering industries worldwide with tailored solutions—from global trading and infrastructure to renewable energy and healthcare. Partner with us for seamless operations and sustainable growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Desktop */}
      <section className='home-section position-relative d-flex flex-column d-none d-md-block' >
        <div className="container-fluid">
          <div className="row align-items-center">

            <div className="col-5"></div>
            <div className="content col-lg-12 col-md-12 mx-auto col-sm-12">
              <h4>Global Trading</h4>
            </div>
            <div className="col d-none d-md-block">
              <div className="border border-success border-1 opacity-100"></div>
            </div>
          </div>
          <div className="row">
            <div className='col-lg-1 col-md-2 col-12'></div>
            <div className="col-lg-5 col-md-6 col-12 solution gb">
              <div className="global-trade"><img className="service-sol" src="globe.png" /></div>
              <div className="icon-content mt-2"><h6>Global Trading</h6>
                <ul className='space'>
                  <li>· Import/Export services</li>
                  <li>· Sourcing & Distribution</li>
                  <li>· Trading in various materials, including construction materials, energy resources, and machinery</li>
                  <li>· Custom solutions for international clients</li>
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-md-2 col-12'></div>
            <div className="trading-text col-lg-4 col-md-6 col-12 p-0">
              <img src="trading.png" alt="description" />
            </div>

          </div>
          <div className="row mt-5">
            <div className='col-lg-1 col-md-1 col-12'></div>
            <div className="trading-text col-lg-3 col-md-3 col-12 p-0">
              <img src="site.png" alt="description" />
            </div>
            <div className='col-lg-2 col-md-2 col-12'></div>
            <div className="col-lg-6 col-md-6 col-12 solution">
              <div className="global-trade"><img className="infra" src="infrastructure.png" /></div>
              <div className="icon-content mt-2"><h6>Infrastructure & Construction</h6>
                <ul className='space'>
                  <li>· Large-scale infrastructure projects</li>
                  <li>· Residential, commercial, and industrial construction</li>
                  <li>· Project management and consultancy</li>
                  <li>· Infrastructure development for transport, energy, and urbanization</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className='col-lg-1 col-md-1 col-12'></div>
            <div className="col-lg-5 col-md-5 col-12 solution gb">
              <div className="global-trade"><img className="truck" src="truck.png" /></div>
              <div className="icon-content mt-2"><h6>Logistics & Supply Chain Management</h6>
                <ul className='space'>
                  <li>· Freight forwarding and shipping solutions</li>
                  <li>· Warehousing & inventory management</li>
                  <li>· Cross-border logistics</li>
                  <li>· Last-mile delivery solutions</li>
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-md-2 col-12'></div>
            <div className="trading-text col-lg-4 col-md-4 col-12 p-0">
              <img src="supply.png" alt="description" />
            </div>
          </div>
          <div className="row mt-5">
            <div className='col-lg-1 col-md-1 col-12'></div>
            <div className="trading-text col-lg-3 col-md-3 col-12 p-0">
              <img src="world.png" alt="description" />
            </div>
            <div className='col-lg-3 col-md-3 col-12'></div>
            <div className="col-lg-4 col-md-6 col-12 solution">
              <div className="global-trade"><img className="world" src="renewable-energy.png" /></div>
              <div className="icon-content mt-2"><h6>Energy Solutions</h6>
                <ul className='space'>
                  <li>· Renewable Energy Projects (Solar, Wind, etc.)</li>
                  <li>· Energy Efficiency Solutions</li>
                  <li>· Power Distribution & Infrastructure</li>
                  <li>· Consulting & Engineering Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className='home-section position-relative d-flex flex-column d-block d-md-none' >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-1"></div>
            <div className="content col-lg-12 col-md-12 mx-auto col-sm-12 mt-3">
              <h4>Global Trading</h4>
            </div>
            <div className="col d-none d-md-block">
              <div className="border border-success border-1 opacity-100"></div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-4 col-12">
            <div className="col d-flex align-items-center">
              <img className="me-2" src="dollar.png" style={{width:30 , height:30 }}/>
              <p className="part mb-0">Global Trading</p>
              </div><p>Swaram is positioned as a globally oriented company with aspirations to be a leader in its chosen sectors</p></div> */}

          <div className="row">
            <div className="col-lg-6 d-flex col-md-6 col-12 solution gb">
              <div className="global-trade"><img className="service-sol" src="globe.png" /></div>
              <div className="icon-content mt-2"><h6>Global Trading</h6>
                <ul className='space'>
                  <li>· Import/Export services</li>
                  <li>· Sourcing & Distribution</li>
                  <li>· Trading in various materials, including construction materials, energy resources, and machinery</li>
                  <li>· Custom solutions for international clients</li>
                </ul>
              </div>
            </div>
            <div className="trading-text col-lg-6 col-md-6 col-12 p-0">
              <img src="trading.png" alt="description" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 d-flex col-md-6 col-12 solution">
              <div className="global-trade"><img className="infra" src="infrastructure.png" /></div>
              <div className="icon-content mt-2"><h6>Infrastructure & Construction</h6>
                <ul className='space'>
                  <li>· Large-scale infrastructure projects</li>
                  <li>· Residential, commercial, and industrial construction</li>
                  <li>· Project management and consultancy</li>
                  <li>· Infrastructure development for transport, energy, and urbanization</li>
                </ul>
              </div>
            </div>
            <div className="trading-text col-lg-6 col-md-6 col-12 p-0">
              <img src="site.png" alt="description" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 d-flex col-md-6 col-12 solution gb">
              <div className="global-trade"><img className="truck" src="truck.png" /></div>
              <div className="icon-content mt-2"><h6>Logistics & Supply Chain Management</h6>
                <ul className='space'>
                  <li>· Freight forwarding and shipping solutions</li>
                  <li>· Warehousing & inventory management</li>
                  <li>· Cross-border logistics</li>
                  <li>· Last-mile delivery solutions</li>
                </ul>
              </div>
            </div>
            <div className="trading-text col-lg-6 col-md-6 col-12 p-0">
              <img src="supply.png" alt="description" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 d-flex col-md-6 col-12 solution">
              <div className="global-trade"><img className="world" src="renewable-energy.png" /></div>
              <div className="icon-content mt-2"><h6>Energy Solutions</h6>
                <ul className='space'>
                  <li>· Renewable Energy Projects (Solar, Wind, etc.)</li>
                  <li>· Energy Efficiency Solutions</li>
                  <li>· Power Distribution & Infrastructure</li>
                  <li>· Consulting & Engineering Services</li>
                </ul>
              </div>
            </div>
            <div className="trading-text col-lg-6 col-md-6 col-12 p-0">
              <img src="world.png" alt="description" />
            </div>
          </div>
        </div>
      </section>


    {/* Desktop */}
      <section className='service-last-section d-none d-md-block'>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-5"></div>
            <div className="content col-lg-12 col-md-12 mx-auto col-sm-12">
              <h4>Healthcare</h4>
            </div>
            <div className="col d-none d-md-block">
              <div className="border border-success border-1 opacity-100"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-6 col-12 solution gb">
              <div className="icon-content mt-2"><h6>Preventive & Supportive Solutions</h6>
                <ul className='space'>
                  <li>· Medical equipment and healthcare supplies trading</li>
                  <li>· Preventive healthcare solutions</li>
                  <li>· Telemedicine and digital healthcare integration</li>
                  <li>· Health and wellness consultancy</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="trading-text col-lg-3 col-md-6 col-12 p-0">
              <img src="building.png" alt="description" />
            </div>
          </div>
        </div>
      </section>
      {/* Mobile */}
      <section className='service-last-section d-block d-md-none'>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-1"></div>
            <div className="content col-lg-12 col-md-12 mx-auto col-sm-12 mt-3">
              <h4>Healthcare</h4>
            </div>
            <div className="col d-none d-md-block">
              <div className="border border-success border-1 opacity-100"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-6 col-12 solution gb">
              <div className="icon-content mt-2"><h6>Preventive & Supportive Solutions</h6>
                <ul className='space'>
                  <li>· Medical equipment and healthcare supplies trading</li>
                  <li>· Preventive healthcare solutions</li>
                  <li>· Telemedicine and digital healthcare integration</li>
                  <li>· Health and wellness consultancy</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="trading-text col-lg-3 col-md-6 col-12 p-0">
              <img src="building.png" alt="description" />
            </div>
          </div>
        </div>
      </section>


    </>
  )

}

export default Service;
