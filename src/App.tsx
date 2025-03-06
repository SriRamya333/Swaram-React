import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/about";
import Header from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Footer from "./components/footer";
import Contact from "./components/contact-us";
import Partner from "./components/partner";
import Service from "./components/service";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/ScrollToTop" element={<ScrollToTop />} />
       
      </Routes>
      <div className="footer-section position-relative d-flex flex-column">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
