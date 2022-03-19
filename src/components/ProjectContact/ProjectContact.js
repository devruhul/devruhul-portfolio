import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProjectContact.css'

const ProjectContact = () => {
    return (
        <section id="call-to-action" class="call-to-action mt-5 pt-5 pb-3" >
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-9">
                        <div class="call-action-content text-center">
                            <h2 class="action-title">Have any project in your mind?</h2>
                            <p className='fs-5'>If you have any project in your mind feel free to reach out my <a className="text-warning fs-2" href="mailto:ruhulamin262001@gmail.com">Email</a>  and contact page</p>
                            <ul className='mb-5'>
                                <li><a class="main-btn custom" href="https://drive.google.com/file/d/1eeS9Ex5QAYkIIEKAU8T0UbJMrRysrtUH/view" target='_blank' rel="noreferrer" download>download cv</a></li>

                                <li> <Nav class="main-btn custom-2" as={Link} to="/contact">hire me</Nav></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ProjectContact;