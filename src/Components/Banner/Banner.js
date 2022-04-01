import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../Images/banner-removebg-preview.png';
import './Banner.css';

const Banner = () => {
  return (
    <div
      className="banner 
    "
    >
      <div className="row d-flex  align-items-center justify-content-center flex-md-reverse container-fluid">
        <div className="col-12 col-md-6 md-p-10 ">
          <h1 className="title ">
            WELCOME TO <br /> oClock
          </h1>
          <p className=" text-center mt-2">
            oClock offers the finest selection of genuine watches of
            internationally renowned brands with international guarantee cards.
            oClock is the only point of sale for distribution of authentic and
            genuine watch, along with after sales service.
          </p>
          <Link to="/allServices">
            <button className="my-3 about-btn">Explore more</button>
          </Link>
        </div>
        <div className="col-12  col-md-6  ">
          <div className="logo-img">
            <img class="img-fluid" src={banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
