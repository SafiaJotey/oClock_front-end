import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import './ManageProducts.css';

const ManageProducts = () => {
  const [services, setServices] = useState([]);
  const [buttonText, setButtonText] = useState('Add to best');
  const [control, setControl] = useState(false);
  const size = 30;
  useEffect(() => {
    fetch(' https://oclock.onrender.com/allServices')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [control]);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you Sure,you wan to delete?');
    if (proceed) {
      fetch(` https://oclock.onrender.com/deleteProduct/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setControl(!control);
            alert('deleted Successfully');
          }
        });
      console.log(id);
    }
  };
  const handleBestProduct = (data) => {
    console.log(data);
    swal({
      title: ' Do you want to add to best selling products?',
      icon: 'warning',

      buttons: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        swal('Done.This item is added to best selling products list.', {
          icon: 'success',
        });
        fetch(' https://oclock.onrender.com/addBestProducts', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
      }
    });
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
                <button
                  className="btn best my-2"
                  onClick={() => handleBestProduct(service)}
                >
                  {buttonText}
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
