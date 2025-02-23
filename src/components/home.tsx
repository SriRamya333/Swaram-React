import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
     <div className="container">
        <img src="./circle.png" alt="" className='bg-main w-full h-full object-cover absolute -z-10'/>
        <div className="row home-content">
          <div className="col-lg-12 col-md-12 col-12">
                <div className="bg-text mt-5">
                  <h3>Shaping the Future of Global Trade & Services</h3>
                </div>
                <div className="para-text">
                  <p>Explore our solutions in Infrastructure, Logistics, Energy, and Trading.</p>
                </div>

                <div className="container text-center">
                  <div className="row justify-content-center">
                    <div className="para-button col-auto">
                      <a href="#" className="btn px-4 py-2">Discover More</a>
                    </div>
                    <div className="para-button1 col-auto">
                      <a href="#" className="btn px-4 py-2">Contact Us</a>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="img col text-center">
                      <img src="/dashboard.svg" alt="Description" className="" />
                    </div>
                  </div>
                </div>
              </div>
        </div>
        </div>
    </>
  )

}


export default Home;
