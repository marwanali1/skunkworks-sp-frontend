import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import spotify_logo from '../../Assets/Spotify_Logo_RGB_White.png';
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
                    <Nav.Link href="/premium"><b>Premium</b></Nav.Link>
                    <Nav.Link href="/help"><b>Help</b></Nav.Link>
                    <Nav.Link href="/download"><b>Download</b></Nav.Link>
                    <Nav.Link>|</Nav.Link>
                    <Nav.Link href="/sign_up"><b>Sign up</b></Nav.Link>
                    <Nav.Link href="/login"><b>Login</b></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;
