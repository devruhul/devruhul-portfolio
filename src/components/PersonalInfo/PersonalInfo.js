import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';


const PersonalInfo = () => {
    return (
        <div>
            <div className='personal-section p-5 '>
                <div className='d-flex justify-content-around '>
                    <CardGroup>
                        <Card>
                            <Card.Body>
                                <Card.Title>2+</Card.Title>
                                <Card.Text>
                                    YEARS OF EXPERIENCE
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>40+</Card.Title>
                                <Card.Text>
                                    COMPLETED PROJECTS
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>10+</Card.Title>
                                <Card.Text>
                                    HAPPY CUSTOMERS
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
                <div className='text-center'>
                    <button className="primary-btn mt-4 fs-5  ">Download CV  <i class="fa-solid fa-download" ></i> </button>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;