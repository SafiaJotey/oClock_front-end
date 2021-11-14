import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BestProducts = () => {
    const [products,setProducts]=useState([]);
   
    useEffect(()=>{
        fetch("http://localhost:5000/allServices")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    const bestProducts=products.slice(0,6);
    return (
        <div className="p-3 country">
      <h2>Our Products</h2>
      <div className="services">
        <div className="row container mx-auto">
          {bestProducts?.map((product) => (
            <div className="col-md-4">
              <div className="service-card border border my-2 p-3">
                <div className="services-img ">
                  <img className="w-100" src={product?.image} alt="" />
                </div>

                <h6>{product?.ModelName}</h6>
                
                <p>{product?.Description}</p>
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