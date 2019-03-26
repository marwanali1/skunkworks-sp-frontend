import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import spotify_logo from '../../Assets/spotify_logo.eps';
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar className="navbar" expand="lg" variant="dark">
            <Navbar.Brand href="/">
                <img
                    className="navbar-logo"
                    src={spotify_logo}
                    alt="Spotify"
                    width="134"
                    height="40"
                />
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/premium">Premium</Nav.Link>
                    <Nav.Link href="/help">Help</Nav.Link>
                    <Nav.Link href="/download">Download</Nav.Link>
                    <Nav.Link href="/signup">Sign up</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;
