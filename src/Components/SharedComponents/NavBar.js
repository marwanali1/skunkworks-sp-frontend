import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import spotify_logo from '../../Assets/spotify_logo.eps';
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar id="navbar" expand="lg" variant="dark">
            <Navbar.Brand id="navbar-brand" href="/">
                <img
                    src={spotify_logo}
                    alt="Spotify"
                    width="134"
                    height="40"
                />
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav id="nav-link-container">
                    <Nav.Link href="/premium">Premium</Nav.Link>
                    <Nav.Link href="/help">Help</Nav.Link>
                    <Nav.Link href="/download">Download</Nav.Link>
                    <Nav.Link>|</Nav.Link>
                    <Nav.Link href="/signup">Sign up</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;
