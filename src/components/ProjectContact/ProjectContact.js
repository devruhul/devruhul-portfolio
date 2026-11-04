import React from "react";
import { Link } from "react-router-dom";
import "./ProjectContact.css";

const ProjectContact = () => (
  <section className="project-cta">
    <div className="project-cta-inner section-shell">
      <div><span className="section-kicker">HAVE SOMETHING IN MIND?</span><h2>Let’s make it<br />work beautifully<span>.</span></h2></div>
      <div className="project-cta-actions">
        <p>Tell me what you’re working on. I’d love to hear about it.</p>
        <Link className="button button-primary" to="/contact">Start a conversation <span>↗</span></Link>
        <a className="cta-email" href="mailto:ruhulamin262001@gmail.com">ruhulamin262001@gmail.com</a>
        <a className="cta-cv" href="/Ruhul_Amin_CV.pdf" download>Download my CV ↓</a>
      </div>
    </div>
  </section>
);

export default ProjectContact;
