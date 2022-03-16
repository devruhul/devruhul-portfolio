import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import ExperienceEducation from '../ExperienceEducation/ExperienceEducation';
// import Blogs from '../Blogs/Blogs';
// import Contact from '../Contact/Contact';
// import Portfolios from '../Portfolios/Portfolios';
import './Home.css'

const Home = () => {
    return (
        <div className='body-bg'>
            <Banner />
            <About />
            <Services />
            <ExperienceEducation />
            {/* <Portfolios />
            <Contact />
            <Blogs /> */}
        </div>
    );
};

export default Home;