import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

function Navigation(props) {
    return (
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
            <Container>
                <Link className="navbar-brand" to="/home">the Middle</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="bg-primary mt-sm-1 ms-auto">
                        <ul className='navbar-nav'>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact='true' to="/home">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact='true' to="/trending">
                                    Trending
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link disabled" exact='true' to="/discussion">
                                    Discussions
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link disabled" exact='true' to="/about">
                                    About Us
                                </NavLink>
                            </li>
                            {/* Route to landing for testing */}
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" exact='true' to="/landing">
                                    Landing
                                </NavLink>
                            </li> */}
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Navigation