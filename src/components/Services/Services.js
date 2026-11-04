import React from "react";
import "./Services.css";

const services = [
  { icon: "fa-mobile-screen-button", title: "Responsive websites", text: "Interfaces that feel natural on phones, tablets, and desktop screens." },
  { icon: "fa-pen-ruler", title: "Frontend development", text: "Thoughtful, maintainable React and JavaScript builds from design through launch." },
  { icon: "fa-layer-group", title: "Landing pages", text: "Focused pages that explain your offer clearly and guide visitors to act." },
  { icon: "fa-plug", title: "API integration", text: "Connect your frontend to services and data with dependable API integrations." },
  { icon: "fa-gauge-high", title: "Website improvements", text: "Practical fixes for usability, responsive layouts, and performance bottlenecks." },
  { icon: "fa-screwdriver-wrench", title: "Ongoing support", text: "A reliable partner for updates, new features, and those tricky frontend bugs." },
];

const Services = () => (
  <section className="services-section section-shell" id="services">
    <div className="section-heading">
      <div><span className="section-kicker">HOW I CAN HELP</span><h2>From first sketch<br />to final build<span className="accent-dot">.</span></h2></div>
      <p>Whether you’re starting from a blank page or improving something that already exists, I can help you move forward.</p>
    </div>
    <div className="service-grid">
      {services.map((service, index) => (
        <article className="service-card" key={service.title}>
          <div className="service-card-top"><i className={`fa-solid ${service.icon}`} aria-hidden="true" /><span>0{index + 1}</span></div>
          <h3>{service.title}</h3><p>{service.text}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Services;
