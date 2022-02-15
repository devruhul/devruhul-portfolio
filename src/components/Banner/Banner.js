import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../../images/profile.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container container mt-5'>
            <div className="welcome-left">
                <div>
                    <h1>Hello &#128075;</h1>
                    <p className='fs-3'>I'm <span className='text-danger fs-1 font-weight-bold'>Ruhul Amin</span>. <br /> Front End Developer &#128293;. <br /> Always learning.</p>
                </div>
                <div className="social-media-icon">
                    <div>

                        <a href="https://github.com/devruhul" target="_blank" rel="noopener noreferrer">  <i class="fa-brands fs-2 p-2 rounded-circle fa-github"></i></a>

                        <a href="https://www.linkedin.com/in/devruhul/" target="_blank" rel="noopener noreferrer">  <i class="fa-brands fs-2 p-2 rounded-circle fa-linkedin"></i></a>

                        <a href='mailto:ruhulamin262001@gmail.com' target="_blank" rel="noopener noreferrer">   <i class="fa-solid fs-2 p-2 rounded-circle fa-envelope">

                        </i> </a>

                        <a href="https://twitter.com/dev_ruhul" target="_blank" rel="noopener noreferrer">  <i class="fa-brands fs-2 p-2 rounded-circle fa-twitter"></i></a>


                        <a href="https://www.instagram.com/devruhul/" target="_blank" rel="noopener noreferrer">  <i class="fa-brands fs-2 p-2 rounded-circle fa-instagram"></i> </a>
                    </div>
                    <div>
                        <Link to="/contact"> <button className="primary-btn mt-4 fs-5">Contact Me</button></Link>
                    </div>

                </div>
            </div>
            <div className="welcome-right">
                <img className='w-50' src={profileImg} alt="ruhul-amin" />
            </div>
        </div>
    );
};

export default Banner;