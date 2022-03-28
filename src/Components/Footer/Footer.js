import React from "react";
import "./Footer.css";




const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-center">
                <h1>oClock</h1>
                
                
                <p className="mt-4 ">
                  <small>
                 *  offers the finest selection of genuine watches of internationally renowned brands with international guarantee cards.oClock is the only point of sale for distribution of authentic and genuine watch, along with after sales service.
                  </small>
                </p>

                <p className="mt-5">
                  <small>oClock ©copyright . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul className="my-5">
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">About</li>
                  <li className="footer-menu">Contact </li>
                  <li className="footer-menu">Blogs </li>
                 
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for the newsletter</h3>
                <input
                  className="footer-input my-5"
                  type="text"
                  placeholder="Enter  your Email"
                />
                
                <div className="map d-flex align-items-center justify-content-center">
                  
                  <div>
                    <p>
                    Holding No. 100 (1st Floor), Bir Uttam A K Khandaker Road,
                      <br />  Mohakhali C/A, Dhaka-1212.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;