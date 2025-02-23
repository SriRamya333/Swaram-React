
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Service from './components/service';
import Home from './components/home';
import Footer from './components/footer';
import Future from './components/future';
import OurService from './components/our-service';
import Why from './components/why';
import Connect from './components/connect';
import Testimonial from './components/testimonial';

function App() {

  return (
    <>
    
      <section className='nav-bar'>
        <Navbar />
      </section>
      
      <section className='home-section '>
        <img src="/bg-green-1.png" alt="" className='color-img'/>
        <img src='/green-tri.png' className='green-tri' />
        {/* <img src="./blue-tri.png" alt="" className='blue=tri' /> */}
        <img src="./Frame-3.png" alt="" className='img-fream' />
        <img src="./Frame-4.png" alt="" className='img-fream1' />
        <div className="container">
          <Home />
        </div>
      </section>
      <section className='future'>
        <div className="oval">
          <Future />
        </div>
      </section>
      <section className='our-service'>
        
        <div className="oval2">
          <OurService/>
        </div>
      </section>
      <section className='why'>
        <div className=" ">
          <Why/>
        </div>
      </section>
      <section className='third-section'>
        <div className=" ">
          <Connect/>
        </div>
      </section>
      <section className=' '>
        <div className=" ">
          <Testimonial/>
        </div>
      </section>
      
      <section className='footer-section'>
        <Footer />
      </section>
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Router>



    </>
  )
}

export default App
