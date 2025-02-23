import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ourservice = () => {
  return (
    <>

      <div className="container">
        <div className="">
          <div className="row">
            <div className="second-section col-lg-6 col-md-6 col-6">
              <div className="graph-image">
                <img src="/graph.png" className='img-service' />
              </div>
            </div>
            <div className="second-section col-md-6">
              <div className="content">
                <h2>Our Services</h2>
              </div>

              <h2 className="">Explore our expertise in Trading, Infrastructure, Logistics, and Energy</h2>

              <div className="mt-4">
                <div className="row">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-2">
                        <img src="/dollar.png" />
                      </div>
                      <div className="col-10 m-auto">
                        <p>Global Trading</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-2">
                        <img src="/coin.png" />
                      </div>
                      <div className="col-10 m-auto">
                        <p>Logistics & Supply Chain Management</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-2">
                        <img src="/house.png" />
                      </div>
                      <div className="col-10 m-auto">
                        <p>Energy Solutions</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-2">
                        <img src="/office.png" />
                      </div>
                      <div className="col-10">
                        <p>Infrastructure & construction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="explore">
              <a href="#" className="btn1 mt-2">Explore Services</a>
              </div>
          
            </div>

          </div>
        </div>
      </div>
    </>
  )

}

export default Ourservice;
