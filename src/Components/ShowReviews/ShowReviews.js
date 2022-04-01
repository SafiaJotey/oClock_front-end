import React, { useEffect, useState } from 'react';
import { Autoplay } from 'swiper';
// modules styles
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// swiper bundle styles
import 'swiper/swiper-bundle.min.css';
// swiper core styles
import 'swiper/swiper.min.css';
import useAuth from './../Hooks/useAuth';
import Review from './Review';

const ShowReviews = () => {
  const { user } = useAuth();
  const [reviews, setRervices] = useState([]);
  useEffect(() => {
    fetch('https://morning-sea-41407.herokuapp.com/review')
      .then((res) => res.json())
      .then((data) => setRervices(data));
  }, []);
  console.log(reviews);
  return (
    <div className="review">
      <div>
        <p>TESTIMONIALS</p>
        <h1 className=" reviewtitle">REVIEWS ABOUT US</h1>
        <p>
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

export default ShowReviews;
