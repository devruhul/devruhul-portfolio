import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceEducation = () => {
    return (
        <div>
            <h2>Experience & Education</h2>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2021 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<i className="fa-solid fa-briefcase fs-2 mt-3 pb-4"></i>}
                >

                    <h3 className="vertical-timeline-element-title">Front End Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Sunamganj</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<i className="fa-solid fa-briefcase fs-2 mt-3 pb-4"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Sunamganj</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#E91E64', color: '#fff' }}
                    date="November 2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<i className="fa-solid fa-graduation-cap fs-2 mt-3 pb-4"></i>}
                >
                    <h3 className="vertical-timeline-element-title">B.Sc in Accounting</h3>
                    <h4 className="vertical-timeline-element-subtitle">National University</h4>
                    <p>
                        Second Year Running
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<i className="fa-solid fa-graduation-cap fs-2 mt-3 pb-4"></i>}
                >
                    <h3 className="vertical-timeline-element-title">Higher Secondary Education (H.S.C) </h3>
                    <h4 className="vertical-timeline-element-subtitle">Sunamganj Govt. College, Sunamganj</h4>
                    <p>
                        Completed 2019
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<i className="fa-solid fa-star fs-2 mt-3 pb-4"></i>}
                />
            </VerticalTimeline>



        </div>
    );
};

export default ExperienceEducation;