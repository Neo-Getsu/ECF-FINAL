import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import MechanicImage from '../assets/img/logo/logo-parrot.png';

const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={MechanicImage}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Garage V. Parrot Logo"
                        style={{ borderRadius: '20%', marginRight:'0.5rem' }}
                    />
                    Garage V. Parrot
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/vehicles">Vehicles</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
