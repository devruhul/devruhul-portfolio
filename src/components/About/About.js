import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import profile from '../../images/profile.jpg'
import ExperienceEducation from '../ExperienceEducation/ExperienceEducation';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import './About.css'

const About = () => {
    const reactNow = 90;
    const jsNow = 80;
    const bootstrapNow = 95;
    const nodeNow = 90;
    const monogoDbNow = 75;
    const firebaseNow = 80;

    return (
        <div className='container mt-5'>
            <h5 className="fs-4">About Me</h5>
            <div className="about-container bg-warning p-5">
                <div>
                    <img className="fluid w-50" src={profile} alt="" />
                </div>
                <div>
                    <Card border="dark" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Self-introduction</Card.Title>
                            <Card.Text>
                                I'm Ruhul, also known as Ruhul Amin, a self-learner of Programming, FullStack Web Development  from Sunamganj, Bangladesh. I love coding, solving problems, building amazing projects, reading books & many other cool stuffs.
                                I believe, Knowledge has no limits!.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div>
                    <h2>My Skills</h2>
                    <div className='progress-container'>
                        <div className='progress-bar-container'>
                            <h2> REACT</h2>
                            <ProgressBar now={reactNow} animated striped variant="success" label={`${reactNow}%`} />;
                        </div>
                        <div className='progress-bar-container'>
                            <h2> JAVASCRIPT</h2>
                            <ProgressBar now={jsNow} animated striped variant="success" label={`${jsNow}%`} />;
                        </div>
                        <div className='progress-bar-container'>
                            <h2> BOOTSTRAP</h2>
                            <ProgressBar now={bootstrapNow} animated striped variant="success" label={`${bootstrapNow}%`} />;
                        </div>
                        <div className='progress-bar-container'>
                            <h2> NODE JS</h2>
                            <ProgressBar now={nodeNow} animated striped variant="success" label={`${nodeNow}%`} />;
                        </div>
                        <div className='progress-bar-container'>
                            <h2> MONGO DB</h2>
                            <ProgressBar now={monogoDbNow} animated striped variant="success" label={`${monogoDbNow}%`} />;
                        </div>
                        <div className='progress-bar-container'>
                            <h2> FIREBASE</h2>
                            <ProgressBar now={firebaseNow} animated striped variant="success" label={`${firebaseNow}%`} />;
                        </div>
                    </div>
                </div>
            </div>
            <PersonalInfo />
            <ExperienceEducation />
        </div>
    );
};

export default About;