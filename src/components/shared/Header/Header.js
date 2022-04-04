import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect className="fw-bold py-2"  style={{ background:'linear-gradient(to bottom, #84a0c9, #75acd7, #60b8e2, #43c4e9, #12d0eb)'}} expand="lg"  variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/" >ruhul.a()</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fs-5">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="portfolios">Portfolio</Nav.Link>
                            <Nav.Link as={Link} to="services">Services</Nav.Link>
                            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
                            {/* <Nav.Link as={Link} to="blogs">Blogs</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;