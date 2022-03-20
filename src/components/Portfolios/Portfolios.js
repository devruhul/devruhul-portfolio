import React from 'react';
import './Portfolios.css'
import carRepair from '../../images/car-repair-project.png'
import soloTour from '../../images/solo-tour-project.png'
import dValy from '../../images/dvaly-project.png'
import breakingBad from '../../images/breaking-bad-project.png'
import mealDb from '../../images/meal-db-project.png'
import agency from '../../images/agency-project.png'
import { Card } from 'react-bootstrap';

const Portfolios = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-center fs-2 fw-bold mt-3 mb-5'>My Recent Works</h2>

            <div className="portfolio-container container">
                <Card className='portfolio-card  '>
                    <Card.Img className='portfolio-img' variant="top" src={carRepair} />
                    <Card.Body>
                        <Card.Title>Car Repair App</Card.Title>
                        <Card.Text>
                            A car repair app that allows users to create an account, log in, and add a car to their account.
                            Users can also add a car to their account, view their profile, and view all of the cars in their account.
                        </Card.Text>
                        <Card.Footer>
                            <Card.Link target="_blank" className="text-white fs-5" href="https://github.com/devruhul/car-repair-client">Github</Card.Link>
                            <Card.Link target="_blank" className="text-white fs-5" href="https://car-repair-devruhul.netlify.app/">Live Demo</Card.Link>
                        </Card.Footer>
                    </Card.Body>
                </Card>

                <Card className='portfolio-card'>
                    <Card.Img className='portfolio-img' variant="top" src={soloTour} />
                    <Card.Body>
                        <Card.Title>Solo Tour App</Card.Title>
                        <Card.Text>
                            A solo tour app that allows users to create an account, log in, and add a tour to their account.
                            Users can also add a tour to their account, view their profile, and view all of the tours in their account.
                        </Card.Text>
                        <Card.Footer>
                            <Card.Link target="_blank" className="text-white fs-5" href="https://github.com/devruhul/solo-tour-client">Github</Card.Link>
                            <Card.Link target="_blank" className="text-white fs-5" href="https://solo-tour-devruhul-c125b.web.app/">Live Demo</Card.Link>
                        </Card.Footer>

                    </Card.Body>
                </Card>

                <Card className='portfolio-card'>
                    <Card.Img className='portfolio-img' variant="top" src={dValy} />
                    <Card.Body>
                        <Card.Title>DValy</Card.Title>
                        <Card.Text>
                            A Dvaly app that created using react-router-dom v6, react-bootstrap, and react. All latest  v6 changes routes are used this app. If your new to v6 then you can check this repo or live link.
                        </Card.Text>
                        <Card.Footer>
                            <Card.Link target="_blank" className="text-white fs-5" href="https://github.com/devruhul/dvaly-project">Github</Card.Link>
                            <Card.Link target="_blank" className="text-white fs-5" href="https://dvaly-project.netlify.app/">Live Demo</Card.Link>
                        </Card.Footer>

                    </Card.Body>
                </Card>

                <Card className='portfolio-card'>
                    <Card.Img className='portfolio-img' variant="top" src={breakingBad} />
                    <Card.Body>
                        <Card.Title>Breaking Bad</Card.Title>
                        <Card.Text>
                            A website based on breaking bad characters. Made with react. You can search for a character and see their bio click on and hover. Data is pulled from an API.
                        </Card.Text>
                        <Card.Footer>
                            <Card.Link target="_blank" className="text-white fs-5" href="https://github.com/devruhul/breaking-bad">Github</Card.Link>
                            <Card.Link target="_blank" className="text-white fs-5" href="https://breaking-bad-devruhul.netlify.app/">Live Demo</Card.Link>
                        </Card.Footer>

                    </Card.Body>
                </Card>

                <Card className='portfolio-card'>
                    <Card.Img className='portfolio-img' variant="top" src={mealDb} />
                    <Card.Body>
                        <Card.Title>Meal DB</Card.Title>
                        <Card.Text>
                            A website that is meal related. Made with react, bootstrap. You can search for a meal and see their info when you click that item. Data is pulled from an API.
                        </Card.Text>
                        <Card.Footer>
                            <Card.Link target="_blank" className="text-white fs-5" href="https://github.com/devruhul/meal-db-project">Github</Card.Link>
                            <Card.Link target="_blank" className="text-white fs-5" href="https://meal-db-project-devruhul.netlify.app/">Live Demo</Card.Link>
                        </Card.Footer>
                    </Card.Body>
                </Card>

                <Card className='portfolio-card'>
                    <Card.Img className='portfolio-img' variant="top" src={agency} />
                    <Card.Body>
                        <Card.Title>Agency</Card.Title>
                        <Card.Text>
                            This is a static agency related website  made with html, css and bootstrap. This website is a mockup of a real agency website. You can see the website code and live link.
                        </Card.Text>
                        <Card.Footer>
                            <Card.Link target="_blank" className="text-white fs-5" href="https://github.com/devruhul/agency-project">Github</Card.Link>
                            <Card.Link target="_blank" className="text-white fs-5" href="https://devruhul.github.io/agency-project/">Live Demo</Card.Link>
                        </Card.Footer>

                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Portfolios;