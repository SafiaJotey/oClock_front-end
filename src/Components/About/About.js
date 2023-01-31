import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bs1 from '../../Images/about.jpg';
import './About.css';

const About = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(' https://oclock.onrender.com/getBestProducts')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
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
        {services?.map((product) => (
          <div className="col-md-4">
            <div className="row  card card-similar1">
              <img className="mt-1" src={product.image} alt="watch"></img>

              <div className="my-5 my-md-2">
                <h4>{product.ModelName}</h4>
                <p> Barcode: {product.Barcode} </p>
                <Link to={`/booking/${product._id}`}>
                  <button className="btn ">Order Now</button>
                </Link>
                <br />
                <small>In Stock : Available </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
