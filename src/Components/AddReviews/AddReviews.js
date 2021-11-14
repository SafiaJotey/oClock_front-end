import React from 'react';
import useAuth from '../Hooks/useAuth';
import { useForm } from 'react-hook-form';

const AddReviews = () => {
    const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };
  return (
    <div>
      <div  className="addservices">
        <h1 className="mt-5 text-center "> Add New Services Here</h1>
        <div className="login-box w-25 m-auto mt-5">
          <div className="event-box  d-flex justify-content-center align-items-center">
            <div className="login-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="p-2 m-2 w-100"
                />
                <br />
                {/* <input
                  {...register("date")}
                  // placeholder="Name"
                  type="date"
                  className="p-2 m-2 w-100"
                />
                <br /> */}
                <input
                  {...register("Reviews")}
                  placeholder="Feedback"
                  className="p-2 m-2"
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("Ratings")}
                  placeholder="rate us"
                  className="p-2 m-2"
                  className="p-2 m-2 w-100"
                />

                
               
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value="ADD"className="btn  w-50"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;