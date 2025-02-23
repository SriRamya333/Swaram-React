import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Why = () => {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="content col-lg-12 col-md-12 mx-auto col-sm-12">
               <h2>why choose us</h2>
                </div>
            </div>
            <div className="row mt-3">
                <div className="decade col-6">
                 <h2>Decades of experience, global reach, and a commitment to <span className='why-content'>excellence</span></h2>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-4">
                    <div className='global' >
                        <img src="/global.png" className="why-icon"/>
                    </div>
                    <div className="icon-content mt-2">
                        <h6>Global Expertise</h6>
                        <p>Decades of experience across multiple sectors, providing tailored services</p>
                    </div>
                </div>
                <div className="col-4">
                <div className='global1'>
                        <img src="/setting.png" className="why-icon1"/>
                    </div>
                    <div className="icon-content mt-2">
                        <h6>End-to-End Solutions</h6>
                        <p>Integrated services, from sourcing to full-scale development, streamlining operations and enhancing efficiency.
                        </p>
                    </div>
                </div>
                <div className="col-4">
                <div className='global' >
                        <img src="/bulb.png" className="why-icon2"/>
                    </div>
                    <div className="icon-content mt-2">
                        <h6>Global Expertise</h6>
                        <p>Adoption of the latest technologies to offer cutting-edge solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
         
        </>
      )

}

export default Why;
