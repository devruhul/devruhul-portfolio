import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Services.css';


const Services = () => {
    return (
        <section className='services-section container p-5 '>
            <div>
                <h2 className='text-center fs-2 fw-bold mt-3 mb-5'>My Services</h2>
                <CardGroup className="card-container">
                    <Card>
                        <i class="fa-solid fa-mobile-button"></i>
                        <Card.Body>
                            <Card.Title>Landing Page</Card.Title>
                            <Card.Text>
                                I will create your best landing page for your business. For best quality if you have figma file then I will create your best landing page.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <i class="fa-solid fa-palette"></i>
                        <Card.Body>
                            <Card.Title>Web Design</Card.Title>
                            <Card.Text>
                                I will help you to design responsive & modern websites from scratch using HTML, CSS, JavaScript, Bootstrap.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <i class="fa-solid fa-code"></i>
                        <Card.Body>
                            <Card.Title>Web Development</Card.Title>
                            <Card.Text>
                                Need a custom dynamic website? Well, I'll help you to build site(s) with Node, Express, MongoDb, at a reasonable cost.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <i class="fa-solid fa-bezier-curve"></i>
                        <Card.Body>
                            <Card.Title>UI Design</Card.Title>
                            <Card.Text>
                                A user interface designer is responsible for creating the look of a website. They're tasked with designing a user interface from the user's point of view
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <i class="fa-solid fa-rocket"></i>
                        <Card.Body>
                            <Card.Title>Website Speed Optimise</Card.Title>
                            <Card.Text>
                                Who likes slow speed? Speeding up WordPress and Custom websites is like playing with the keyboard to me!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <i class="fa-solid fa-headset"></i>
                        <Card.Body>
                            <Card.Title>Consultancy and support</Card.Title>
                            <Card.Text>
                                Got stuck somewhere and badly need help or fix? I can be your savior on any tech-related problems/bugs.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
            {/* <div className='text-center'>
                    <button className="primary-btn mt-4 fs-5  ">Download CV  <i class="fa-solid fa-download" ></i> </button>
                </div> */}
        </section>

    );
};

export default Services;