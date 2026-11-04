import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => (
  <Navbar collapseOnSelect expand="lg" className="site-nav">
    <Container className="nav-inner">
      <Navbar.Brand as={Link} to="/" className="wordmark">ra<span>.</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="portfolio-navigation" aria-label="Toggle navigation" />
      <Navbar.Collapse id="portfolio-navigation">
        <Nav className="ms-auto nav-links">
          <Nav.Link href="/#work">Work</Nav.Link>
          <Nav.Link href="/#about">About</Nav.Link>
          <Nav.Link href="/#services">Services</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-contact">Get in touch <span>↗</span></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
