import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css'


const About = () => {

    return (
        // About me and skills section start
        <div className='container mt-5'>
            <h5 className="text-center fs-2 fw-bold mt-3 mb-5">About Me & Skills</h5>
            <div className="about-container p-5">
                <Card className="lh-lg about-card">
                    <Card.Body>
                        <Card.Title>Self-introduction</Card.Title>
                        <Card.Text className="about-text">
                            I'm Ruhul, also known as Ruhul Amin, a self-learner of Programming, FullStack Web Development  from Sunamganj, Bangladesh. I love coding, solving problems, building amazing projects, reading books & many other cool stuffs.
                            I believe, Knowledge has no limits!.
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/*About me and skills section end  */}

                {/* Skills Section start */}
                <div className="skills-section">
                    <Card className="skills-card">
                        <Card.Body>
                            <Card.Title>Skills</Card.Title>
                            <Card.Text className="skills-text ">
                                I am comfortable with the following technologies: <br />

                                <i class="fa-brands fa-html5"></i>
                                <i class="fa-brands fa-css3"></i>
                                <i class="fa-brands fa-bootstrap"></i>
                                <span>Tailwind</span>
                                <i class="fa-brands fa-js"></i>
                                <i class="fa-brands fa-react"></i>
                                <span>Material UI,  </span>
                                <span> Firebase</span>
                                <i class="fa-brands fa-node"></i>
                                <span>Express</span>
                                <i class="fa-solid fa-database"></i>

                                <br />
                                Other tools that I am regularly use: <br />

                                <i class="fa-brands fa-git-alt"></i>
                                <i class="fa-solid fa-terminal"></i>
                                VS Code
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                {/* Skills Section end */}
            </div>
        </div>
    )
}

export default About