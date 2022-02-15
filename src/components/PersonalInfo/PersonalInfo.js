import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';


const PersonalInfo = () => {
    return (
        <div>


            <h5>Personal Infos</h5>
            <div className='personal-section p-5 bg-dark'>
                <div>
                    <div className='d-flex justify-content-around bg-info'>
                        <div>
                            <h5>Age : <span>20 Years</span> </h5>
                            <h5>Nationality : <span>Bangladeshi</span> </h5>
                            <h5>Freelance : <span>Available</span> </h5>

                        </div>
                        <div>
                            <h5>Whatsapp : <span>01764896633</span> </h5>
                            Email:
                            <a href="mailto:ruhulamin262001@gmail.com"> ruhulamin262001@gmail.com </a>
                            <h5>languages : <span>English</span> </h5>
                        </div>
                    </div>
                </div>
                <div className='bg-info d-flex justify-content-around '>
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