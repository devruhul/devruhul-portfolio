import React from 'react';
import { Card } from 'react-bootstrap';
import ExperienceEducation from '../ExperienceEducation/ExperienceEducation';
import Services from '../Services/Services';
import './About.css'


const About = () => {

    return (
        <div className='container mt-5'>
            <h5 className="fs-2 fw-bold mb-4">About Me & Skills</h5>
            <div className="about-container p-5">
                <Card className="w-75 h-100 fs-5 lh-lg bg-none">
                    <Card.Body>
                        <Card.Title>Self-introduction</Card.Title>
                        <Card.Text>
                            I'm Ruhul, also known as Ruhul Amin, a self-learner of Programming, FullStack Web Development  from Sunamganj, Bangladesh. I love coding, solving problems, building amazing projects, reading books & many other cool stuffs.
                            I believe, Knowledge has no limits!.
                        </Card.Text>
                    </Card.Body>
                </Card>

                {/* Skills Section */}
                {/* <h2 className="fs-2 mt-4 ml-3">My Skills</h2> */}
                <div className="skills-section">

                    <p className='text-center'>HTML</p>
                    <div class="container">
                        <div class="skills html">90%</div>
                    </div>

                    <p className='text-center'>CSS</p>
                    <div class="container">
                        <div class="skills css">80%</div>
                    </div>

                    <p className='text-center'>Bootstrap</p>
                    <div class="container">
                        <div class="skills bootstrap">95%</div>
                    </div>

                    <p className='text-center'>JavaScript</p>
                    <div class="container">
                        <div class="skills js">70%</div>
                    </div>

                    <p className='text-center'>React</p>
                    <div class="container">
                        <div class="skills react">90%</div>
                    </div>

                    <p className='text-center'>Firebase</p>
                    <div class="container">
                        <div class="skills firebase">95%</div>
                    </div>

                    <p className='text-center'>Node JS</p>
                    <div class="container">
                        <div class="skills node">75%</div>
                    </div>

                    <p className='text-center'>MongoDB</p>
                    <div class="container">
                        <div class="skills mongo">60%</div>
                    </div>

                    <p className='text-center'>Git</p>
                    <div class="container">
                        <div class="skills git">90%</div>
                    </div>

                    <p className='text-center'>Devtool</p>
                    <div class="container">
                        <div class="skills devtool">85%</div>
                    </div>

                </div>
            </div>

            <Services />
            <ExperienceEducation />
        </div>
    )
}

export default About