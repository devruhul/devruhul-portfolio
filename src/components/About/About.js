import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css'


const About = () => {

    return (
        <div className='container mt-5'>
            <h5 className="text-center fs-2 fw-bold mt-3 mb-5">About Me & Skills</h5>
            <div className="about-container w-100 h-100 p-5">
                    <Card className="w-75 lh-lg about-card ">
                        <Card.Body>
                            <Card.Title>Self-introduction</Card.Title>
                            <Card.Text className="about-text">
                                I'm Ruhul, also known as Ruhul Amin, a self-learner of Programming, FullStack Web Development  from Sunamganj, Bangladesh. I love coding, solving problems, building amazing projects, reading books & many other cool stuffs.
                                I believe, Knowledge has no limits!.
                            </Card.Text>
                        </Card.Body>
                    </Card>


                {/* Skills Section */}
                {/* <h2 className="fs-2 mt-4 ml-3">My Skills</h2> */}
                <div className="skills-section">

                    <p className='text-center'>HTML</p>
                    <div className="container">
                        <div className="skills html">90%</div>
                    </div>

                    <p className='text-center'>CSS</p>
                    <div className="container">
                        <div className="skills css">80%</div>
                    </div>

                    <p className='text-center'>Bootstrap</p>
                    <div className="container">
                        <div className="skills bootstrap">95%</div>
                    </div>

                    <p className='text-center'>JavaScript</p>
                    <div className="container">
                        <div className="skills js">70%</div>
                    </div>

                    <p className='text-center'>React</p>
                    <div className="container">
                        <div className="skills react">90%</div>
                    </div>

                    <p className='text-center'>Firebase</p>
                    <div className="container">
                        <div className="skills firebase">95%</div>
                    </div>

                    <p className='text-center'>Node JS</p>
                    <div className="container">
                        <div className="skills node">75%</div>
                    </div>

                    <p className='text-center'>MongoDB</p>
                    <div className="container">
                        <div className="skills mongo">60%</div>
                    </div>

                    <p className='text-center'>Git</p>
                    <div className="container">
                        <div className="skills git">90%</div>
                    </div>

                    <p className='text-center'>Devtool</p>
                    <div className="container">
                        <div className="skills devtool">85%</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About