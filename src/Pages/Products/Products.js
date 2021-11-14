import React from 'react';
import AllProducts from '../../Components/AllProducts/AllProducts';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const Products = () => {
    return (
        <div>
            <Header></Header>
            <AllProducts></AllProducts>
            <Footer></Footer>
        </div>
    );
};

export default Products;