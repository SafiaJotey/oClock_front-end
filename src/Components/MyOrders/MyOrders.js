import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
  const { user } = useAuth();

  const [services, setServices] = useState([]);

  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(` https://oclock.onrender.com/myOrder/${user.email}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [control]);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you Sure,you wan to delete?');
    if (proceed) {
      fetch(` https://oclock.onrender.com/deleteOrder/${id}`, {
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

  return (
    <div>
      <h1 className="order">My orders of {user.displayName} </h1>

      <div className="services">
        <div className="row container mx-auto">
          {services?.map((order) => (
            <div className="col-md-4">
              <div className="service border border p-3">
                <div className="services-img ">
                  <img className="w-100" src={order?.image} alt="" />
                </div>

                <h6>Place:{order?.name}</h6>

                <h5 className="text-danger"> Cost :{order?.price}$</h5>
                <p>UserName:{order?.Username}</p>
                <p>Address:{order?.Address}</p>
                <p className="text-danger">Status:{order?.status}</p>
                {order.payment ? (
                  'paid'
                ) : (
                  <Link to={`/dashboard/payment/${order._id}`}>
                    <button className="btn">pay</button>
                  </Link>
                )}
                <button
                  onClick={() => handleDelete(order?._id)}
                  className="btn"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
