import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
    
  {/* Container for Content */}
  <div className='container position-relative d-flex flex-column align-items-center text-center py-5'>
    {/* Content */}
    <div className='row justify-content-center w-100 position-relative' style={{ zIndex: 1 }}>
      <div className='col-lg-10 col-md-12 col-12'>
        <div className='bg-text'>
          <h3>Shaping the Future of Global Trade & Services</h3>
        </div>
        <div className='para-text'>
          <p>Explore our solutions in Infrastructure, Logistics, Energy, and Trading.</p>
        </div>

        {/* Buttons */}
        <div className='d-flex flex-wrap justify-content-center gap-3 mt-3'>
          <a href='#' className='btn btn-primary px-4 py-2'>Discover More</a>
          <a href='#' className='btn btn-secondary px-4 py-2'>Contact Us</a>
        </div>

        {/* Image Section */}
        <div className='row mt-5 justify-content-center'>
          <div className='col-md-6 col-10 d-flex justify-content-center'>
            <img src='/Group-0.png' alt='Description' className='img-fluid' style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </div>

    {/* Background Image (Centered and Responsive) */}
    <img 
      src='./Group-5.png' 
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
    </>

  )

}


export default Home;
