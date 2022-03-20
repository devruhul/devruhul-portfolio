import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Services.css';


const Services = () => {
    return (
        <section className='container services-section mt-5'>
            <div>
                <h2 className='text-center fs-2 fw-bold mt-3 mb-5'>My Services</h2>
                <CardGroup className="card-container">
                    <Card className="card p-4 round">
                        <i className="fa-solid fa-mobile-button card-icon"></i>
                        <Card.Body>
                            <Card.Title className="fs-3 text-primary fw-bold">Landing Page</Card.Title>
                            <Card.Text className=" fs-5 text-justify">
                                I will create your best landing page for your business. For best quality if you have figma file then it would be better for me cause you know!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card p-4 round">
                        <i className="fa-solid fa-palette card-icon"></i>
                        <Card.Body>
                            <Card.Title  className="fs-3 text-primary fw-bold">Web Design</Card.Title>
                            <Card.Text  className="fs-5 text-justify">
                                I will help you to design responsive & modern websites from scratch using HTML, CSS, Tailwind, Bootstrap, JavaScript
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card p-4 round">
                        <i className="fa-solid fa-code card-icon"></i>
                        <Card.Body>
                            <Card.Title  className="fs-3 text-primary fw-bold">Web Development</Card.Title>
                            <Card.Text  className="fs-5 text-justify">
                                Need a custom dynamic website? Well, I'll help you to build site(s) with Node, Express, MongoDb, at a reasonable cost.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card p-4 round">
                        <i className="fa-solid fa-bezier-curve card-icon"></i>
                        <Card.Body>
                            <Card.Title  className="fs-3 text-primary fw-bold">UI Design</Card.Title>
                            <Card.Text  className="fs-5 text-justify">
                                If you don't have any design proto type then I can help you to design your website proto type.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card p-4 round">
                        <i className="fa-solid fa-rocket card-icon"></i>
                        <Card.Body>
                            <Card.Title  className="fs-3 text-primary fw-bold">Website Speed Optimise</Card.Title>
                            <Card.Text  className="fs-5 text-justify">
                                Who likes slow speed? Speeding up WordPress and Custom websites is like playing with the keyboard to me!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card p-4 round">
                        <i className="fa-solid fa-headset card-icon"></i>
                        <Card.Body>
                            <Card.Title  className="fs-3 text-primary fw-bold">Consultancy and support</Card.Title>
                            <Card.Text  className="fs-5 text-justify">
                                Got stuck somewhere and badly need help or fix? I can be your savior on any tech-related problems/bugs.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
            {/* <div className='text-center'>
                    <button className="primary-btn mt-4 fs-5  ">Download CV  <i className="fa-solid fa-download" ></i> </button>
                </div> */}
        </section>

    );
};

export default Services;