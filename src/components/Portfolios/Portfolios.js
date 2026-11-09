import React from "react";
import "./Portfolios.css";
import carRepair from "../../images/car-repair-project.png";
import soloTour from "../../images/solo-tour-project.png";
import dValy from "../../images/dvaly-project.png";
import breakingBad from "../../images/breaking-bad-project.png";
import mealDb from "../../images/meal-db-project.png";
import agency from "../../images/agency-project.png";
import parkwiseCover from "../../images/parkwise-cover.svg";
import wakequestCover from "../../images/wakequest-cover.svg";

const projects = [
  { title: "Parkwise", type: "Parking & mobility · 2026", image: parkwiseCover, imageAlt: "Illustrated preview of Parkwise, a parking reservation app", description: "A parking management app for finding nearby spaces and reserving a spot in real time.", github: "https://github.com/devruhul/parkwise", live: "https://parkwise-ruddy.vercel.app/", stack: "React · Leaflet · Tailwind CSS" },
  { title: "WakeQuest", type: "Mobile app · 2026", image: wakequestCover, imageAlt: "Illustrated preview of WakeQuest alarm missions", description: "An offline-first alarm app that makes you complete a short mission before the alarm can be dismissed.", github: "https://github.com/devruhul/wakequest", stack: "Flutter · Dart · Riverpod" },
  { title: "Car Repair", type: "Service platform", image: carRepair, description: "A responsive booking experience that helps customers find and manage vehicle repairs.", github: "https://github.com/devruhul/car-repair-client", live: "https://car-repair-devruhul.netlify.app/", stack: "React · Firebase · Node.js" },
  { title: "Solo Tour", type: "Travel & discovery", image: soloTour, description: "A travel platform for discovering tours, managing bookings, and planning the next trip.", github: "https://github.com/devruhul/solo-tour-client", live: "https://solo-tour-devruhul-c125b.web.app/", stack: "React · Firebase · Bootstrap" },
  { title: "DValy", type: "E-commerce concept", image: dValy, description: "A clean storefront concept with product browsing and a smooth, responsive user experience.", github: "https://github.com/devruhul/dvaly-project", live: "https://dvaly-project.netlify.app/", stack: "React · React Router · Bootstrap" },
  { title: "Breaking Bad", type: "API-powered app", image: breakingBad, description: "Explore and search character profiles in a playful interface powered by a public API.", github: "https://github.com/devruhul/breaking-bad", live: "https://breaking-bad-devruhul.netlify.app/", stack: "React · REST API · CSS" },
  { title: "Meal DB", type: "Food & recipes", image: mealDb, description: "A recipe discovery app with searchable meals and quick access to recipe details.", github: "https://github.com/devruhul/meal-db-project", live: "https://meal-db-project-devruhul.netlify.app/", stack: "React · REST API · Bootstrap" },
  { title: "Agency", type: "Brand website", image: agency, description: "A responsive agency landing page designed to make services and next steps easy to find.", github: "https://github.com/devruhul/agency-project", live: "https://devruhul.github.io/agency-project/", stack: "HTML · CSS · Bootstrap" },
];

const Portfolios = () => (
  <section className="work-section section-shell" id="work">
    <div className="section-heading">
      <div><span className="section-kicker">LATEST BUILDS · SELECTED WORK</span><h2>Selected projects<span className="accent-dot">.</span></h2></div>
      <p>A few things I’ve designed and built, from useful tools to polished digital experiences.</p>
    </div>
    <div className="project-grid">
      {projects.map((project, index) => (
        <article className="project-card" key={project.title}>
          <a className="project-image" href={project.live || project.github} target="_blank" rel="noopener noreferrer" aria-label={project.live ? `View ${project.title} live` : `View ${project.title} on GitHub`}>
            <img src={project.image} alt={project.imageAlt || `${project.title} website preview`} loading="lazy" />
            <span className="project-number">0{index + 1}</span><span className="project-open">↗</span>
            {project.imageAlt && <span className="project-art-label">ILLUSTRATED PREVIEW</span>}
          </a>
          <div className="project-meta"><span>{project.type}</span><span>{project.stack}</span></div>
          <div className="project-title-row"><h3>{project.title}</h3><div className="project-links"><a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source code`}>GitHub ↗</a>{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live website`}>Live site ↗</a>}</div></div>
          <p>{project.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Portfolios;
