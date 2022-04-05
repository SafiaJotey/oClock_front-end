import React, { useEffect, useState } from 'react';
import { FcRightUp } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const BestProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(' https://sheltered-anchorage-82357.herokuapp.com/allServices')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const bestProducts = products.slice(0, 6);
  return (
    <div className="p-3 country">
      <h2>Our Products</h2>

      <Link to="/allServices">
        <div className="d-flex justify-content-end align-items-center explore">
          Explore All
          <FcRightUp />
        </div>
      </Link>

      <div className="services">
        <div className="row container mx-auto">
          {bestProducts?.map((product) => (
            <div className="col-md-4">
              <div className="service-card border border my-2 p-3">
                <div className="services-img ">
                  <img className="w-100" src={product?.image} alt="" />
                </div>

                <h6>{product?.ModelName}</h6>

                <h3 className="text-danger"> Cost : $ {product?.price}</h3>
                <Link to={`/booking/${product._id}`}>
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

export default BestProducts;
