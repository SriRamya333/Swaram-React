
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about';
import Header from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Service from './components/service';
import Home from './components/home';
import Footer from './components/footer';





function App() {

  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <div className='footer-section position-relative d-flex flex-column'>
      <Footer/>
      </div>
      
    </Router>
    
    
    </>


  )
}

export default App
