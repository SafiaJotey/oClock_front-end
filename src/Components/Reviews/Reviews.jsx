import React, { useEffect, useState } from 'react';
// import required modules
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import useAuth from '../Hooks/useAuth';
import Review from '../ShowReviews/Review';

const Reviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://morning-sea-41407.herokuapp.com/review')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-dark_bg mb-8">
      <div className="md:pt-[50px] mx-1">
        <p className="text-center text-2xl text-blue-600 font-bolder">
          TESTIMONIALS
        </p>
        <h1 className=" text-xl md:text-2xl  text-center font-bold py-2   text-primary">
          REVIEWS ABOUT US
        </h1>
        <p className="hidden md:block px-10 md:px-[100px] text-justify md:text-center">
          People's opinion is our top priority. See what the clients think about
          us.
        </p>
      </div>

      <Swiper
        slidesPerGroup={1}
        autoplay={{
          delay: 2500,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          '@0.75': {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          '@1.00': {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay]}
        className="swiper"
      >
        {reviews?.map((review) => (
          <SwiperSlide
            key={reviews._id}
            className="flex justify-center p-4 ml-36"
          >
            <Review review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
