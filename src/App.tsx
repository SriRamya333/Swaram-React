
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about';
import Header from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Service from './components/service';
import Home from './components/home';
import Footer from './components/footer';
import Contact from './components/contact-us';





function App() {

  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <div className='footer-section position-relative d-flex flex-column'>
      <Footer/>
      </div>
      
    </Router>
    
    
    </>


  )
}

export default App
