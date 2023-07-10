import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Programming from '../Programming/Programming';
import Service from '../Service/Service';
import Blogs from '../Blogs/Blogs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Programming></Programming>
            <Service></Service>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;