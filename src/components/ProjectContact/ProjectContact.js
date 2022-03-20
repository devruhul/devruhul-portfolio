import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProjectContact.css'

const ProjectContact = () => {
    return (
        // project contact section start
        <section id="call-to-action" className="call-to-action mt-5 pt-5 pb-3" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-9">
                        <div className="call-action-content text-center">
                            <h2 className="action-title">Have any project in your mind?</h2>
                            <p className='fs-5'>If you have any project in your mind feel free to reach out my <a className="text-warning fs-2"
                                rel="noreferrer"
                                target="_blank" href="mailto:ruhulamin262001@gmail.com">Email</a>  and contact page</p>
                            <ul className='mb-5'>
                                <li><a className="main-btn custom" href="https://drive.google.com/file/d/1eeS9Ex5QAYkIIEKAU8T0UbJMrRysrtUH/view" target='_blank' rel="noreferrer" download>download cv</a></li>

                                <li> <Nav className="main-btn custom-2" as={Link} to="/contact">hire me</Nav></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // project contact section end 
    );
};

export default ProjectContact;