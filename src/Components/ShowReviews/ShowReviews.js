import React from 'react';
import "./ShowReviews.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from './../Hooks/useAuth';

const ShowReviews = () => {
    const {user}=useAuth();
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/review")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
  
    return (
      <div className="p-3 country">
        <h2>What Customers say about us</h2>
        <div className="services">
          <div className="row container mx-auto">
            {services?.map((service) => (
              <div className="col-md-4">
                <div className="review-card border border my-2 p-3">
                  
  
                  <h6>{service?.name}</h6>
                  
                  <p>{service?.Reviews}</p>
                   <p className="text-warning text-bold">Ratings : {service?.Ratings}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default ShowReviews;