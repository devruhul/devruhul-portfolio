import React from "react";
import "./About.css";

const skillGroups = [
  { label: "Web", skills: ["JavaScript", "React", "Vite", "React Router", "Tailwind CSS", "Leaflet"] },
  { label: "Mobile", skills: ["Flutter", "Dart", "Riverpod", "Hive", "Camera", "Google ML Kit"] },
  { label: "Backend & AI", skills: ["Node.js", "Express", "PostgreSQL", "Python", "Flask", "Gemini API"] },
  { label: "Data & delivery", skills: ["SQLite", "Firebase", "Git", "Vercel"] },
];

const About = () => (
  <section className="about-section section-shell" id="about">
    <div className="section-heading">
      <div><span className="section-kicker">A LITTLE ABOUT ME</span><h2>Good work starts<br />with good thinking<span className="accent-dot">.</span></h2></div>
      <p>I’m Ruhul Amin, a self-taught developer based in London. I enjoy turning ideas into clear, useful websites and learning something new with every build.</p>
    </div>
    <div className="about-layout">
      <article className="about-story">
        <span className="about-mark">ra.</span>
        <h3>Curious by nature.<br />Careful by craft.</h3>
        <p>I care about the details people feel: a page that loads quickly, a layout that makes sense on any screen, and interactions that are easy to understand. I work across the frontend and can connect interfaces to APIs and backend services.</p>
        <a href="https://www.linkedin.com/in/devruhul/" target="_blank" rel="noopener noreferrer">More about my work <span>↗</span></a>
      </article>
      <div className="skills-panel">
        <div className="skills-panel-heading"><span className="section-kicker">TECHNOLOGIES IN MY RECENT PROJECTS</span><span className="skills-spark">✳</span></div>
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.label}>
            <h3>{group.label}</h3>
            <div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
