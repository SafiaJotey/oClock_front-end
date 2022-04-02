import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from './../Hooks/useAuth';
import './Booking.css';

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://morning-sea-41407.herokuapp.com/singleProduct/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  console.log(service);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    data.status = 'pending';

    fetch('https://morning-sea-41407.herokuapp.com/confirmOrder', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert('Order confirmed');
      });
    console.log(data);
  };

  return (
    <div className="booking">
      <h1>Confirm your order</h1>

      <div className="booking-container container">
        <div className="row  d-flex justify-content-center align-items-center ">
          <div className="col-md-6 ">
            <img src={service?.image} alt="" />
          </div>
          <div className="col-md-6 ">
            <h2> {service?.ModelName}</h2>
            <p className="text-start">{service?.Description}</p>
            <h1> price: {service?.price} $</h1>
          </div>
        </div>

        {/* form */}
        <div className="d-flex justify-content-center align-items-center ">
          <div className="w-100 d-flex flex-column justify-content-center align-items-center  ">
            <div>
              <h1>booking Form</h1>
            </div>
            <div className="form w-75 ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register('Username')}
                  defaultValue={user?.displayName}
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register('Email')}
                  defaultValue={user?.email}
                  className="p-2 m-2 w-100"
                />
                <br />
                {service?.ModelName && (
                  <input
                    {...register('name')}
                    defaultValue={service?.ModelName}
                    className="p-2 m-2 w-100"
                    readOnly
                  />
                )}

                <br />

                {service?.price && (
                  <input
                    {...register('price')}
                    defaultValue={service?.price}
                    className="p-2 m-2 w-100"
                  />
                )}

                {service?.image && (
                  <input
                    className="d-none "
                    {...register('image')}
                    defaultValue={service?.image}
                  />
                )}

                <input
                  {...register('Address', { required: true })}
                  placeholder="Enter your proper Address to confirm the order"
                  className="p-2 m-2 w-100"
                />
                {errors.Address && (
                  <span className="text-danger">This field is required</span>
                )}
                <br />
                <input
                  {...register('Mobile', {
                    required: true,
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Only numbers are allowed',
                    },
                  })}
                  onKeyUp={() => {
                    trigger('Mobile');
                  }}
                  placeholder="Enter your Contact Number"
                  className="p-2 m-2 w-100"
                />
                {errors.Mobile && (
                  <small className="text-danger">{errors.Mobile.message}</small>
                )}
                {errors.Address && (
                  <span className="text-danger">This field is required</span>
                )}

                <br />

                <input type="submit" value="Place Order" className="btn " />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
