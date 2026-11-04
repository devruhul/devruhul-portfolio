import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../../images/profile.jpg";

const Banner = () => (
  <section className="hero section-shell" id="home">
    <div className="hero-copy">
      <div className="eyebrow"><span className="availability-dot" /> AVAILABLE FOR SELECT PROJECTS</div>
      <h1>Thoughtful websites.<br /><span>Built for what’s next.</span></h1>
      <p className="hero-description">I’m Ruhul Amin, a London based front end developer creating fast, accessible digital experiences for ambitious teams and businesses.</p>
      <div className="hero-actions">
        <Link className="button button-primary" to="/contact">Let’s talk <span>↗</span></Link>
        <a className="button button-quiet" href="#work">Explore my work <span>↓</span></a>
      </div>
      <div className="hero-socials">
        <a href="https://github.com/devruhul" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/devruhul/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a href="mailto:ruhulamin262001@gmail.com">Email ↗</a>
      </div>
    </div>
    <div className="hero-visual">
      <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      <div className="portrait-frame"><img src={profileImg} alt="Ruhul Amin" /></div>
      <div className="hero-note"><span>✳</span><div><strong>Design-minded</strong><small>Developer in London</small></div></div>
      <div className="hero-index">01 <span>—</span> 04</div>
    </div>
  </section>
);

export default Banner;
