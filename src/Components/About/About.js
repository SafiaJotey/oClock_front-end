import React from 'react';
import bs1 from '../../Images/about.jpg';
import bs2 from '../../Images/bs2.jpg';
import bs3 from '../../Images/bs3.jpg';
import bs5 from '../../Images/bs5.jpg';
import './About.css';

const About = () => {
  return (
    <div className="container vision my-5">
      <h2>Best Selling Products</h2>
      <p>
        OCLOCK is a very reputed and popular name for world class watches and in
        Bangladesh. There are OCLOCK maintains an international standard
        interior, with uniform looking point of sales with an elegant outlook
        and ambience. It is operated by trained sales & customer care
        officers.oClock offers the finest selection of genuine watches of
        internationally renowned brands with international guarantee cards.
      </p>
      <div className="row text-center d-flex flex-column d-md-flex flex-md-row justify-content-center align-items-center  ">
        <div className="col-md-10">
          <div>
            <img className="img" src={bs1} alt="" />
          </div>
        </div>
      </div>

      <div className="row text-center d-flex flex-column d-md-flex flex-md-row justify-content-center align-items-center  ">
        <div className="col-md-4">
          <div className="row  card card-similar1">
            <a href="#">
              <img src={bs2}></img>
            </a>
            <div className="my-5 my-md-2">
              <h4>Garmin </h4>
              <p> Barcode : 6031839.Dial </p>
              <p> Color : GRAY/GUN.</p>
              <button>Order Now</button>
              <br />
              <small>In Stock : Available </small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row  card card-dissimilar">
            <a href="">
              <img src={bs3}></img>
            </a>
            <div className="my-5 my-md-2">
              <h4>Piaget </h4>
              <p> Barcode : 7031839.Dial </p>
              <p> Color : GRAY/GUN.</p>
              <button>Order Now</button>
              <br />
              <small>In Stock : Available </small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row  card card-similar2">
            <a href="">
              <img src={bs5}></img>
            </a>
            <div className="my-5 my-md-2">
              <h4>Cartier </h4>
              <p> Barcode : 9031839.Dial </p>
              <p> Color : GRAY/GUN.</p>
              <button>Order Now</button>
              <br />
              <small>In Stock : Available </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
