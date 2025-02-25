import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Ourservice = () => {
  return (
    <>
      {/* Full-width Background Section */}
      <div className="container-fluid bg position-relative">
        <div className="container">
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-lg-6 col-md-6 col-12 text-center text-md-start mt-5">
              <img src="/graph.png" className="img-fluid" style={{ maxWidth: "80%", height: "auto" }} />
            </div>

            {/* Content Section */}
            <div className="col-lg-6 col-md-6 col-12 mt-4 mt-md-0">
              {/* Section Header */}
              <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                <span className="bg-success bg-opacity-25 text-success fw-bold px-3 py-2 rounded">
                  OUR SERVICES
                </span>
                <div className="border border-success border-1 opacity-100 w-25 ms-3"></div>
              </div>

              {/* Title */}
              <div className="row">
                <div className="col-1 class_child_div">
                  <span className="line"><img src="/line.svg" /></span>
                </div>
                <div className="col-11">
                  <h2 className="logic text-center text-md-start mt-3">
                    Explore our expertise in Trading, Infrastructure, Logistics, and Energy
                  </h2>
                </div>
              </div>



              {/* Service List */}
              <div className="mt-4">
                <div className="row row-cols-1 row-cols-md-2 g-3">
                  <div className="col d-flex align-items-center">
                    <img src="/dollar.png" className="me-2" style={{ width: "30px", height: "30px" }} />
                    <p className="trade mb-0">Global Trading</p>
                  </div>
                  <div className="col d-flex align-items-center">
                    <img src="/coin.png" className="me-2" style={{ width: "30px", height: "30px" }} />
                    <p className="trade mb-0">Logistics & Supply Chain Management</p>
                  </div>
                  <div className="col d-flex align-items-center">
                    <img src="/house.png" className="me-2" style={{ width: "30px", height: "30px" }} />
                    <p className="trade mb-0">Energy Solutions</p>
                  </div>
                  <div className="col d-flex align-items-center">
                    <img src="/office.png" className="me-2" style={{ width: "30px", height: "30px" }} />
                    <p className="trade mb-0">Infrastructure & Construction</p>
                  </div>
                </div>
              </div>

              {/* Explore Button */}
              <div className="explore d-flex justify-content-center justify-content-md-start mt-4">
                <a href="#" className="btn1 btn-primary mt-2 px-4 py-2">Explore Services</a>
              </div>
            </div>
          </div>
        </div>

        {/* Background Image - Positioned Behind Content */}
        <img src="01.png" alt="" className="w-100 img-fluid position-absolute start-0 bottom-0" style={{ zIndex: "-1" }} />
      </div>
    </>
  );
};

export default Ourservice;
