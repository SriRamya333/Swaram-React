
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import About from './components/about';
import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Service from './components/service';
import Home from './components/home';
import Footer from './components/footer';


function App() {

  return (
    <div className='d-flex flex-column'>
    {/* Navbar Section */}
    <section className='nav-bar'>
      <Navbar />
    </section>
    
    {/* Home Section */}
    <div className='home-section position-relative d-flex flex-column'>
  {/* Background Images */}
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
    <Home />
</div>

    
   
    
    {/* Footer Section */}
    <section className='footer-section position-relative d-flex flex-column'>
      <Footer />
    </section>
  </div>
  )
}

export default App
