import 'bootstrap/dist/css/bootstrap.min.css';

const Why = () => {
    return (
        <>
        <div className="container py-5">
          {/* Section Header */}
          <div className="row align-items-center">
            <div className="col-auto">
              <span className="bg-success bg-opacity-25 text-success fw-bold px-3 py-2 rounded">
                WHY CHOOSE US
              </span>
            </div>
            <div className="col">
              <div className="border border-success border-1 opacity-100 w-25"></div>
            </div>
          </div>
      
          {/* Title */}
          <div className="row mt-3">
            <div className="col-12 text-center text-md-start">
              <h2>
                Decades of experience, global reach, and a commitment to{" "}
                <span className="text-success fw-bold">excellence</span>
              </h2>
            </div>
          </div>
      
          {/* Features Section */}
          <div className="row mt-4 row-cols-1 row-cols-md-3 g-4">
            {/* Global Expertise */}
            <div className="col text-center">
              <div className="d-flex justify-content-center">
                <img src="/global.png" className="img-fluid" style={{ width: "60px", height: "60px" }} />
              </div>
              <div className="mt-3">
                <h6>Global Expertise</h6>
                <p>Decades of experience across multiple sectors, providing tailored services.</p>
              </div>
            </div>
      
            {/* End-to-End Solutions */}
            <div className="col text-center">
              <div className="d-flex justify-content-center">
                <img src="/setting.png" className="img-fluid" style={{ width: "60px", height: "60px" }} />
              </div>
              <div className="mt-3">
                <h6>End-to-End Solutions</h6>
                <p>Integrated services, from sourcing to full-scale development, streamlining operations and enhancing efficiency.</p>
              </div>
            </div>
      
            {/* Innovation & Technology */}
            <div className="col text-center">
              <div className="d-flex justify-content-center">
                <img src="/bulb.png" className="img-fluid" style={{ width: "60px", height: "60px" }} />
              </div>
              <div className="mt-3">
                <h6>Innovation & Technology</h6>
                <p>Adoption of the latest technologies to offer cutting-edge solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </>
      
      )

}

export default Why;
