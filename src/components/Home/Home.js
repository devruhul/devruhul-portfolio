import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import ExperienceEducation from '../ExperienceEducation/ExperienceEducation';
// import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Portfolios from '../Portfolios/Portfolios';
import ProjectContact from '../ProjectContact/ProjectContact';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Portfolios />
            <Services />
            <ExperienceEducation />
            <ProjectContact/>
            <Contact />
            {/* <Blogs /> */}
        </div>
    );
};

export default Home;