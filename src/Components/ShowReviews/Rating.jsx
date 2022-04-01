import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Rating = ({ rating, size = 20 }) => {
  const starArr = [];

  let element;

  for (let i = 0; i < rating; i++) {
    element = <AiFillStar className='w-6 h-6' key={i} size={size} color={'#faca51'} />;
    starArr.push(element);
  }
  return starArr;
};

export default Rating;
