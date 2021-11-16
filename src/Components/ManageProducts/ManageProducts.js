import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ManageProducts.css";

const ManageProducts= () => {
  const [services, setServices] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [control]);

  const handleDelete = (id) => {
    const proceed=window.confirm("Are you Sure,you wan to delete?");
    if(proceed){
      fetch(`http://localhost:5000/deleteProduct/${id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setControl(!control);
          alert("deleted Successfully");
        }
      });
    console.log(id);
    }
  };


  return (
    <div className="p-3 country">
      <h2>All Products</h2>
      <div className="services">
        <div className="row container mx-auto">
          {services?.map((service) => (
            <div className="col-md-4">
              <div className="service-card border border my-2 p-3">
                <div className="services-img ">
                  <img className="w-100" src={service?.image} alt="" />
                </div>

                <h6>{service?.ModelName}</h6>
                
                <p>{service?.Description}</p>
                <h3 className="text-danger"> Cost : $ {service?.price}</h3>
                <button
                  onClick={() => handleDelete(service?._id)}
                  className="btn"
                >
                  Delete Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;