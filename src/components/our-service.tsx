import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Ourservice = () => {
  return (
<>
  {/* Full-width Background Section */}
  <div className="container-fluid bg-light position-relative py-5">
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-lg-6 col-md-6 col-12 text-center text-md-start">
          <img src="/graph.png" className="img-fluid" style={{ maxWidth: "100%", height: "auto" }} />
        </div>

        {/* Content Section */}
        <div className="col-lg-6 col-md-6 col-12 mt-4 mt-md-0">
          {/* Section Header */}
          <div className="d-flex align-items-center justify-content-center justify-content-md-start">
            <span className="bg-success bg-opacity-25 text-success fw-bold px-3 py-2 rounded">
              OUR SERVICES
            </span>
            <div className="border border-success border-1 opacity-100 w-15 ms-3"></div>
          </div>

          {/* Title */}
          <h2 className="text-center text-md-start mt-3">
            Explore our expertise in Trading, Infrastructure, Logistics, and Energy
          </h2>

          {/* Service List */}
          <div className="mt-4">
            <div className="row row-cols-1 row-cols-md-2 g-3">
              <div className="col d-flex align-items-center">
                <img src="/dollar.png" className="me-2" style={{ width: "30px", height: "30px" }} />
                <p className="mb-0">Global Trading</p>
              </div>
              <div className="col d-flex align-items-center">
                <img src="/coin.png" className="me-2" style={{ width: "30px", height: "30px" }} />
                <p className="mb-0">Logistics & Supply Chain Management</p>
              </div>
              <div className="col d-flex align-items-center">
                <img src="/house.png" className="me-2" style={{ width: "30px", height: "30px" }} />
                <p className="mb-0">Energy Solutions</p>
              </div>
              <div className="col d-flex align-items-center">
                <img src="/office.png" className="me-2" style={{ width: "30px", height: "30px" }} />
                <p className="mb-0">Infrastructure & Construction</p>
              </div>
            </div>
          </div>

          {/* Explore Button */}
          <div className="d-flex justify-content-center justify-content-md-start mt-4">
            <a href="#" className="btn btn-primary px-4 py-2">Explore Services</a>
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
