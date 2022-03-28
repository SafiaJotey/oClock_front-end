import React from 'react';
import Rating from '../Rating';

const Review = ({ review }) => {
  // console.log(review);
  return (
    <div className="md:pb-12">
      <div className="bg-white dark:dark-card-bg dark:border-secondary shadow-md border-4 rounded-lg text-center py-9  md:py-16 px-8  border-slate-50 w-[400px] md:w-[420px] ">
        <h6>{review?.name}</h6>

        <p>{review?.Reviews}</p>

        <div className="flex justify-center text-yellow-400 heading_sm md:heading_md">
          <Rating rating={review?.Ratings} />
        </div>

        <p className="Neutral-500 md:heading_sm px-0 md:px-8">
          {review?.description && review.description.slice(0, 30)}.
        </p>
        <p className="text-primary">- {review?.name}</p>
      </div>
    </div>
  );
};

export default Review;
