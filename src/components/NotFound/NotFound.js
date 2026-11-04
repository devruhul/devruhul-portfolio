import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="not-found section-shell">
    <span className="section-kicker">ERROR · 404</span>
    <h1>This page wandered<br />off the map<span className="accent-dot">.</span></h1>
    <p>The link may be old, or the page may have moved. Let’s get you back to the good stuff.</p>
    <Link className="button button-primary" to="/">Back to the homepage <span>↗</span></Link>
  </main>
);

export default NotFound;
