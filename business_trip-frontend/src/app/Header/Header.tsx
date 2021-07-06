import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


export function Header() {
    return (
        <React.Fragment>
            <Navbar expand='lg'>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className='mr-auto'>
                        <Nav.Link>
                            <Link to='/home'>HOME</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/users'>USERS</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;