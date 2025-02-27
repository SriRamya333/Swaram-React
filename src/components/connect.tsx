import 'bootstrap/dist/css/bootstrap.min.css';

const Connect = () => {
    return (
        <>
  <div className="container py-5">
    <div className="row justify-content-center align-items-center">
      {/* Background Image Section */}
      <div className="col-lg-12 col-md-12 col-12">
        <div className="connect-image d-flex flex-column justify-content-center align-items-center ">
          <div className="overall">
            <div className="connect-content">
              <h2>
                The company was founded as a partnership to <br /> combine our expertise.
              </h2>
            </div>

            {/* List Section */}
            <div className="vector ">
              <ul className="align list-unstyled">
                <li className="d-flex align-items-center">
                  <img src="vector.png" className="vector-icon" />
                  <span className="vector-text">Global Ambition</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="vector.png" className="vector-icon" />
                  <span className="vector-text">Integrated Solutions</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="vector.png" className="vector-icon" />
                  <span className="vector-text">Emphasis on Expertise</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="vector.png" className="vector-icon" />
                  <span className="vector-text">Focus on Innovation & Sustainability</span>
                </li>
              </ul>
            </div>

            {/* Button Section */}
            <div className="connect-btn">
              <a href="#" className="btn2 px-4 py-2">Connect Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    )

}

export default Connect;
