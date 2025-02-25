
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
