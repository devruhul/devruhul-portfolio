import React from "react";
import { Card } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    // About me and skills section start
    <div className='container mt-5'>
      <h5 className='text-center fs-2 fw-bold mt-3 mb-5'>About Me & Skills</h5>
      <div className='about-container p-5'>
        <Card className='lh-lg about-card'>
          <Card.Body>
            <Card.Title>Self-introduction</Card.Title>
            <Card.Text className='about-text'>
              I'm Ruhul, also known as Ruhul Amin, a self-learner of
              Programming, FullStack Web Development from Sunamganj, Bangladesh.
              I love coding, solving problems, building amazing projects,
              reading books & many other cool stuffs. I believe, Knowledge has
              no limits!.
            </Card.Text>
          </Card.Body>
        </Card>
        {/*About me and skills section end  */}

        {/* Skills Section start */}
        <div className='skills-section'>
          <Card className='skills-card'>
            <Card.Body>
              <Card.Title>Skills</Card.Title>
              <Card.Text className='skills-text '>
                I am comfortable with the following technologies: <br />
                Front End: HTML, CSS, SASS, Bootstrap, Tailwind CSS, JavaScript,
                React, Material UI, Daisy UI <br />
                Backend:Node JS, Express JS <br /> Database: MongoDB <br />{" "}
                Deployment: Firebase, Heroku, Render, Vercel, Netlify <br />{" "}
                Other Tools: Git, CMD, VS Code, Chrome Dev Tools, , Heroku,
                Firebase, etc.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        {/* Skills Section end */}
      </div>
    </div>
  );
};

export default About;
