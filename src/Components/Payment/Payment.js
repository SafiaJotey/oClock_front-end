import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router';
import Checkout from './Checkout';
const stripePromise=loadStripe("pk_test_51Jy0LwBgFp1VWIUWHbxJnNCwiyBmGGn06StHxseA6ZvMlfKJBZrkSXT1TvXeUgBiTThCByH2mc2QPbQ8q2YTJPGr00CNflA4te");
const Payment = () => {
    const {id}=useParams();
    const [order,setOrder]=useState({});
    useEffect(()=>{
        fetch(`https://morning-sea-41407.herokuapp.com/allServices/${id}`)
        .then(res=>res.json())
        .then(data=>setOrder(data));
    },[id])
    return (
        <div>
        <h2>Payment  for : {order.name}</h2>
        <p>Product ID : {order._id}</p>
        <p>Price : $ {order.price}</p>

       {order?.price &&
            <Elements stripe={stripePromise}>
            <Checkout order={order}></Checkout>
            
            
          </Elements>
       }

        </div>
    );
};

export default Payment;