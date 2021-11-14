import React from "react";
import "./Banner.css";

import banner from "../../Images/banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="banner">
        <div className="row d-flex  align-items-center justify-content-center">
          
          <div className="col-md-5 p-2">
            <h1 className="title ">
            WELCOME TO  <br /> DREAM TRAVEL
            </h1>
            <p className=" text-center mt-5">
          

oClock offers the finest selection of genuine watches of internationally renowned brands with international guarantee cards.
oClock is the only point of sale for distribution of authentic and genuine watch, along with after sales service.


            </p>
            <Link to="/allServices"><button className="mt-3 about-btn">Explore more</button></Link>
          </div>
          <div className="col-md-7">
          <div className="logo-img">
              <img  src={banner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;