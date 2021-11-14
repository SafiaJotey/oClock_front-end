import React from 'react';
import BestProducts from '../../BestProducts/BestProducts';
import About from '../../Components/About/About';

import Banner from '../../Components/Banner/Banner';
import ShowReviews from '../../Components/ShowReviews/ShowReviews';
import Social from '../../Components/Social/Social';

import Header from './../../Components/Header/Header';
import Footer from './../../Components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            
            <BestProducts></BestProducts>
            <About></About>
            <ShowReviews></ShowReviews>
            <Social></Social>
            <Footer></Footer>

        </div>
    );
};

export default Home;