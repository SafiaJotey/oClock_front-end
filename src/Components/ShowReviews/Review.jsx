import React from 'react';
import Rating from './Rating';
import './Review.css';

const Review = ({ review }) => {
  console.log(review);
  return (
    <div className="md:pb-12 review">
      <div className="review-card  ">
        <h6>{review?.name}</h6>

        <p>{review?.Reviews}</p>

        <div className="rate">
          <Rating rating={review?.Ratings} />
        </div>
      </div>
    </div>
  );
};

export default Review;
