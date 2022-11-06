import React from "react";
import "./Portfolios.css";
import carRepair from "../../images/car-repair-project.png";
import soloTour from "../../images/solo-tour-project.png";
import dValy from "../../images/dvaly-project.png";
import breakingBad from "../../images/breaking-bad-project.png";
import mealDb from "../../images/meal-db-project.png";
import agency from "../../images/agency-project.png";
import { Card } from "react-bootstrap";

const Portfolios = () => {
  return (
    // portfolio section start
    <div className='mt-5'>
      <h2 className='text-center fs-2 fw-bold mt-3 mb-5'>My Recent Works</h2>

      <div className='portfolio-container container'>
        <Card className='portfolio-card'>
          <Card.Img
            className='portfolio-img'
            variant='top'
            alt='car repair website thumbnail'
            src={carRepair}
          />
          <Card.Body>
            <Card.Title>Car Repair App</Card.Title>
            <Card.Text>
              A car repair app that allows users to create an account, log in,
              and add a car to their account. Users can also add a car to their
              account, view their profile, and view all of the cars in their
              account.
            </Card.Text>
            <Card.Footer className='portfolio-icon'>
              <Card.Link
                target='_blank'
                className='text-white fs-5'
                href='https://github.com/devruhul/car-repair-client'
                rel='noopener noreferrer'
                alt="car repair app's github"
              >
                <i className='fa-brands fa-github' alt='github icon'></i>
              </Card.Link>
              <Card.Link
                target='_blank'
                className='text-white fs-5'
                href='https://car-repair-devruhul.netlify.app/'
                rel='noopener noreferrer'
                alt="car repair app's live site"
              >
                <i
                  className='fa-solid fa-arrow-up-right-from-square'
                  alt='live icon'
                ></i>
              </Card.Link>
            </Card.Footer>
          </Card.Body>
        </Card>

        <Card className='portfolio-card'>
          <Card.Img
            className='portfolio-img'
            alt='solo tour website thumbnail'
            variant='top'
            width='100%'
            height='100%'
            src={soloTour}
          />
          <Card.Body>
            <Card.Title>Solo Tour App</Card.Title>
            <Card.Text>
              A solo tour app that allows users to create an account, log in,
              and add a tour to their account. Users can also add a tour to
              their account, view their profile, and view all of the tours in
              their account.
            </Card.Text>
            <Card.Footer className='portfolio-icon'>
              <Card.Link
                target='_blank'
                className='text-white fs-5'
                href='https://github.com/devruhul/solo-tour-client'
                rel='noopener noreferrer'
                alt="solo tour app's github"
              >
                <i className='fa-brands fa-github' alt='github icon'></i>
              </Card.Link>
              <Card.Link
                target='_blank'
                className='text-white fs-5'
                href='https://solo-tour-devruhul-c125b.web.app/'
                rel='noopener noreferrer'
                alt='solo tour website'
              >
                <i
                  className='fa-solid fa-arrow-up-right-from-square'
                  alt='live icon'
                ></i>
              </Card.Link>
            </Card.Footer>
          </Card.Body>
        </Card>

        <Card className='portfolio-card'>
          <Card.Img
            className='portfolio-img'
            variant='top'
            alt='dvaly website thumbnail'
            src={dValy}
          />
          <Card.Body>
            <Card.Title>DValy</Card.Title>
            <Card.Text>
              A Dvaly app that created using react-router-dom v6,
              react-bootstrap, and react. All latest v6 changes routes are used
              this app. If your new to v6 then you can check this repo or live
              link.
            </Card.Text>
            <Card.Footer className='portfolio-icon'>
              <Card.Link
                target='_blank'
                className='text-white fs-5'
                href='https://github.com/devruhul/dvaly-project'
                rel='noopener noreferrer'
                alt="dvaly app's github"
              >
                <i className='fa-brands fa-github' alt='github icon'></i>
              </Card.Link>
              <Card.Link
                target='_blank'
                className='text-white fs-5'
                href='https://dvaly-project.netlify.app/'
                rel='noopener noreferrer'
                alt="dvaly app's live site"
              >
                <i
                  className='fa-solid fa-arrow-up-right-from-square'
                  alt='live icon'
                ></i>
              </Card.Link>
            </Card.Footer>
          </Card.Body>
        </Card>

        <Card className='portfolio-card'>
          <Card.Img
            className='portfolio-img'
            alt='breaking bad website thumbnail'
            variant='top'
            src={breakingBad}
          />
          <Card.Body>
            <Card.Title>Breaking Bad</Card.Title>
            <Card.Text>
              A website based on breaking bad characters. Made with react. You
              can search for a character and see their bio click on and hover.
              Data is pulled from an API.
            </Card.Text>
            <Card.Footer className='portfolio-icon'>
              <Card.Link
                target='_blank'
                className='text-white fs-5'
                href='https://github.com/devruhul/breaking-bad'
                rel='noopener noreferrer'
                alt="breaking bad app's github"
              >
                <i className='fa-brands fa-github' alt='github icon'></i>
              </Card.Link>
              <Card.Link
                target='_blank'
                className='text-white fs-5'
                href='https://breaking-bad-devruhul.netlify.app/'
                rel='noopener noreferrer'
                alt="breaking bad app's live site"
              >
                <i
                  className='fa-solid fa-arrow-up-right-from-square'
                  alt='live icon'
                ></i>
              </Card.Link>
            </Card.Footer>
          </Card.Body>
        </Card>

        <Card className='portfolio-card'>
          <Card.Img
            className='portfolio-img'
            variant='top'
            alt='meal db website thumbnail'
            src={mealDb}
          />
          <Card.Body>
            <Card.Title>Meal DB</Card.Title>
            <Card.Text>
              A website that is meal related. Made with react, bootstrap. You
              can search for a meal and see their info when you click that item.
              Data is pulled from an API.
            </Card.Text>
            <Card.Footer className='portfolio-icon'>
              <Card.Link
                target='_blank'
                className='text-white fs-5'
                href='https://github.com/devruhul/meal-db-project'
                rel='noopener noreferrer'
                alt="meal db app's github"
              >
                <i className='fa-brands fa-github' alt='github icon'></i>
              </Card.Link>
              <Card.Link
                target='_blank'
                className='text-white fs-5'
                href='https://meal-db-project-devruhul.netlify.app/'
                rel='noopener noreferrer'
                alt="meal db app's live site"
              >
                <i
                  className='fa-solid fa-arrow-up-right-from-square'
                  alt='live icon'
                ></i>
              </Card.Link>
            </Card.Footer>
          </Card.Body>
        </Card>

        <Card className='portfolio-card'>
          <Card.Img
            className='portfolio-img'
            variant='top'
            alt='agency website thumbnail'
            src={agency}
          />
          <Card.Body>
            <Card.Title>Agency</Card.Title>
            <Card.Text>
              This is a static agency website made with html, css and bootstrap.
              This website is a mockup of a real agency website. You can see the
              website code and live link.
            </Card.Text>
            <Card.Footer className='portfolio-icon'>
              <Card.Link
                target='_blank'
                className='text-white fs-5'
                href='https://github.com/devruhul/agency-project'
                rel='noopener noreferrer'
                alt="agency app's github"
              >
                <i className='fa-brands fa-github' alt='github icon'></i>
              </Card.Link>
              <Card.Link
                target='_blank'
                className='text-white fs-5'
                href='https://devruhul.github.io/agency-project/'
                rel='noopener noreferrer'
                alt="agency app's live site"
              >
                <i
                  className='fa-solid fa-arrow-up-right-from-square'
                  alt='live icon'
                ></i>
              </Card.Link>
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    </div>
    // portfolio section end
  );
};

export default Portfolios;
