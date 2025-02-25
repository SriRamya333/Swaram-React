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
    
 <section>
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
        <Future />
      </div>
    </section>
    
    {/* Our Services Section */}
    <section className='position-relative d-flex flex-column'>
      <div className=''>
        <OurService />
      </div>
    </section>

    <section className=''>
      <div className="class">
        <Side/>
      </div>
    </section>
    
    {/* Why Section */}
    <section className='why position-relative d-flex flex-column why-bg'>
      <div>
        <Why />
      </div>
    </section>
    
    {/* Third Section */}
    <section className='position-relative d-flex flex-column bg-gray'>
      <div>
        <Connect />
      </div>
    </section>
    
    {/* Testimonial Section */}
    <section className='position-relative d-flex flex-column'>
      <div>
        <Testimonial />
      </div>
    </section>
    </>

  )

}


export default Home;






