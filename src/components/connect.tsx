import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Connect = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="connect-image">
                            <img src="/connect.png" className='connect'/>
                            <div className="overall">
                            <div className="connect-content">
                                <h2>The company was founded as a partnership to <br/> combine our expertise.</h2>
                            </div>
                            <div className="vector">
                                <ul className='align'>
                                    <li><img src="/vector.png" /> <span className='vector-text'>Global Ambition</span></li>
                                    <li><img src="/vector.png" /> <span className='vector-text'>Integrated Solutions</span></li>
                                    <li><img src="/vector.png" /> <span className='vector-text'>Emphasis on Expertise  </span></li>
                                    <li><img src="/vector.png" /> <span className='vector-text'>Focus on Innovation & Sustainability </span></li>
                                </ul>
                            </div>
                            <div className="connect-btn">
                                <a href="#" className="btn2 mt-2">Connect Us</a>
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
