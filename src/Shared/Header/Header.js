import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';


const Header = () => {


    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" className='bg-success text-white' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <h2>
                        FRIDGE BD
                    </h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link href="home#faq">FAQ</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;