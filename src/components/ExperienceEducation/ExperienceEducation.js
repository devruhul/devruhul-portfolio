import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './exp&edu.css'

const ExperienceEducation = () => {
    return (
    // ExperienceEducation section start
        <div className="container mt-5 mb-5">
            <h2 className='text-center fs-2 fw-bold mb-5'>Experience & Education</h2>
            <VerticalTimeline className='timeline-container p-5 mt-5'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2021 - Present"
                    contentStyle={{ backgroundImage: ' radial-gradient(circle farthest-corner at 14.2% 27.5%, rgba(104, 199, 255, 1) 0%, rgba(181, 126, 255, 1) 90%', color: '#fff' }}

                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundClip: ' border-box', backgroundImage: ' radial-gradient(circle farthest-corner at 14.2% 27.5%, rgba(104, 199, 255, 1) 0%, rgba(181, 126, 255, 1) 90%' }}

                    icon={<i className="fa-solid fa-briefcase fs-2 mt-3 pb-4"></i>}
                >
                    <h3 className="vertical-timeline-element-title lh-lg">Front End Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">STS Consultancy Services, Sunamganj</h4>
                    <p>
                        My Responsibilities : <br />
                       1. Finding and writing down mistakes in the design part of the website. <br />
                       2. Explain the wrong part of the design to the backend developer
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ backgroundImage: ' radial-gradient(circle farthest-corner at 14.2% 27.5%, rgba(104, 199, 255, 1) 0%, rgba(181, 126, 255, 1) 90%', color: '#fff' }}

                    date="November 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundClip: ' border-box', backgroundImage: ' radial-gradient(circle farthest-corner at 14.2% 27.5%, rgba(104, 199, 255, 1) 0%, rgba(181, 126, 255, 1) 90%' }}
                    icon={<i className="fa-solid fa-graduation-cap fs-2 mt-3 pb-4"></i>}
                >
                    <h3 className="vertical-timeline-element-title lh-lg">BBA in Accounting</h3>
                    <h4 className="vertical-timeline-element-subtitle">National University</h4>
                    <p>
                        One of the best university in Bangladesh. <br /> 
                        Second Year Running.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education mb-5"
                    date="2017 - 2019"
                    contentStyle={{ backgroundImage: ' radial-gradient(circle farthest-corner at 14.2% 27.5%, rgba(104, 199, 255, 1) 0%, rgba(181, 126, 255, 1) 90%', color: '#fff' }}

                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundClip: ' border-box', backgroundImage: ' radial-gradient(circle farthest-corner at 14.2% 27.5%, rgba(104, 199, 255, 1) 0%, rgba(181, 126, 255, 1) 90%' }}

                    icon={<i className="fa-solid fa-graduation-cap fs-2 mt-3 pb-4"></i>}
                >
                    <h4 className="vertical-timeline-element-title lh-lg">Higher Secondary Certificate </h4>
                    <h4 className="vertical-timeline-element-subtitle">Sunamganj Govt. College, Sunamganj</h4>
                    <p>
                        I studied one of the best institution in my town, Completed 2019
                    </p>
                </VerticalTimelineElement>
                {/* <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', backgroundClip: ' border-box', backgroundImage: ' radial-gradient(circle farthest-corner at 14.2% 27.5%, rgba(104, 199, 255, 1) 0%, rgba(181, 126, 255, 1) 90%' }}

                    icon={<i className="fa-solid fa-star fs-2 mt-3 pb-4"></i>}
                /> */}
            </VerticalTimeline>
        </div>
    // ExperienceEducation section end
    );
};

export default ExperienceEducation;