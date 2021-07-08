import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


export function Header() {
    return (
        <React.Fragment>
            <Navbar expand='lg' bg='dark' variant='dark'>
                <Navbar.Brand href="/">
                    <img alt='' src='src/img/header/reactjs-icon.svg' width='30' height='30' className='d-linline-block align top' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className='mr-auto'>
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