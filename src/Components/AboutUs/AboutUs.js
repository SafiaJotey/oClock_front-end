import React from 'react';
import './Aboutus.css';

const AboutUs = () => {
  return (
    <div className="aboutUs row p-5 d-flex  items-center">
      <div className="col-md-7">
        <div className="row">
          <div className="col-md-5">
            <img
              className="w-100 "
              src="https://cdn.shopify.com/s/files/1/0564/2705/3216/files/img-2.jpg?v=1633499008"
              alt=""
            />
          </div>
          <div className="col-md-7">
            <div className=" row">
              <div className="col-md-12 ">
                <img
                  className="w-100 mt-2 "
                  src="https://cdn.shopify.com/s/files/1/0564/2705/3216/files/deal-bg.png?v=1633432139"
                  alt=""
                />
              </div>
              <div className=" mt-3 col-md-12">
                <img
                  className="w-100 "
                  src="https://cdn.shopify.com/s/files/1/0564/2705/3216/files/img-3.jpg?v=1633499021"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5 p-3 d-flex flex-column justify-center mt-5">
        <h4>About us</h4>
        <h2>A Unique Watch That Fits Your Style</h2>
        <p className="aboutUs px-3">
          The new Best collection is already here! This quartz Lawson Franklin
          38 model, designed with simplicity and elegance, is truly a cherry on
          the cake. Comes in different sizes and band colors, has a stainless
          steel back for a personalized engraving.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
