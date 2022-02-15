import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Portfolios from '../Portfolios/Portfolios';

const Home = () => {
    return (
        <div className='mt-5'>
            <Banner />
            <About />
            {/* <Portfolios />
            <Contact />
            <Blogs /> */}
        </div>
    );
};

export default Home;