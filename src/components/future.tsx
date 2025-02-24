import 'bootstrap/dist/css/bootstrap.min.css';

const Future = () => {
    return (
      <div className="container text-center py-5">
      {/* Heading */}
      <div className="popular mb-4">
        <h2>We Featured on Popular Partners Like</h2>
      </div>
    
      {/* Logo Grid */}
      <div className="row justify-content-center g-3">
        <div className="col-6 col-md-3 d-flex justify-content-center">
          <img src="/Fortune.png" className="img-fluid" alt="Fortune" style={{ maxWidth: "150px", height: "auto" }} />
        </div>
        <div className="col-6 col-md-3 d-flex justify-content-center">
          <img src="/Forbes.png" className="img-fluid" alt="Forbes" style={{ maxWidth: "150px", height: "auto" }} />
        </div>
        <div className="col-6 col-md-3 d-flex justify-content-center">
          <img src="/invest-detroit.png" className="img-fluid" alt="Invest Detroit" style={{ maxWidth: "150px", height: "auto" }} />
        </div>
        <div className="col-6 col-md-3 d-flex justify-content-center">
          <img src="/Robinhood.png" className="img-fluid" alt="Robinhood" style={{ maxWidth: "150px", height: "auto" }} />
        </div>
      </div>
    </div>
    
      )

}

export default Future;
