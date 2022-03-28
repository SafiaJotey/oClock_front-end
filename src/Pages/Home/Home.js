import React from 'react';
import About from '../../Components/About/About';
import Banner from '../../Components/Banner/Banner';
import BestProducts from '../../Components/BestProducts/BestProducts';
import ShowReviews from '../../Components/ShowReviews/ShowReviews';
import Social from '../../Components/Social/Social';
import Footer from './../../Components/Footer/Footer';
import Header from './../../Components/Header/Header';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <BestProducts />

      <ShowReviews></ShowReviews>

      <Social></Social>
      <Footer></Footer>
    </div>
  );
};

export default Home;
