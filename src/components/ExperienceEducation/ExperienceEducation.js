import React from "react";
import "./exp&edu.css";

const ExperienceEducation = () => (
  <section className="experience-section section-shell">
    <div className="section-heading">
      <div><span className="section-kicker">EXPERIENCE</span><h2>Where I’ve<br />worked<span className="accent-dot">.</span></h2></div>
      <p>Hands-on experience collaborating with a team to improve the quality and consistency of web interfaces.</p>
    </div>
    <article className="experience-card">
      <div className="experience-mark"><i className="fa-solid fa-code" aria-hidden="true" /></div>
      <div className="experience-main">
        <div className="experience-title-row"><div><h3>Front End Developer</h3><p>STS Consultancy Services · Sunamganj</p></div><span className="experience-date">2021 — Present</span></div>
        <p className="experience-description">Reviewed website interfaces, identified design issues, and worked with backend developers to communicate fixes and keep the experience consistent.</p>
        <div className="experience-tags"><span>Interface review</span><span>Team collaboration</span><span>Frontend quality</span></div>
      </div>
    </article>
  </section>
);

export default ExperienceEducation;
