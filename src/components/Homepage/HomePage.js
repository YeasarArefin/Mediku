import React from 'react';
import Coute from './Coute';
import Customers from './Customers';
import Downloadapp from './Downloadapp';
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
            <Downloadapp />
            <Coute />
            <Footer />
        </>

    );

};

export default HomePage;
