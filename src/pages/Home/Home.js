import React from 'react';
import Banner from '../../components/banner/Banner';
import Services from '../landingpage/Services';
import Buses from '../buses/Buses';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Buses></Buses> 
        </div>
    );
};

export default Home;