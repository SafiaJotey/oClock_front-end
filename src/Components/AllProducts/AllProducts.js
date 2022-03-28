import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AllProducts.css';

const AllProducts = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://morning-sea-41407.herokuapp.com/allServices')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="country">
      <h2>All Products</h2>

      <div className="services">
        <div className="row container mx-auto">
          {services?.map((service) => (
            <div className="col-md-4">
              <div className="service-card border border my-2 p-3">
                <div className="services-img ">
                  <img className="w-100" src={service?.image} alt="" />
                </div>

                <h3>{service?.ModelName}</h3>

                <h6> Cost : $ {service?.price}</h6>
                <Link to={`/booking/${service._id}`}>
                  <button className="btn ">Book Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
