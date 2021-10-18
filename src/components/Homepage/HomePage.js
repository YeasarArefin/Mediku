import React from 'react';
import Customers from './Customers';
import Footer from './Footer';
import Home from './Home';
import Services from './Services';
import Speciality from './Speciality';

const HomePage = () => {

    return (

        <>
            <Home />
            <Speciality />
            <Services />
            <Customers />
            <Footer />
        </>

    );

};

export default HomePage;
