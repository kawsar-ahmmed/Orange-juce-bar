import React from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const navigate = useNavigate();
    return (
        <Navbar style={{ "height": "80px" }} collapseOnSelect expand="lg" className='sticky-top'>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} height={40} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 menu-full sticky-top">
                        <Nav.Link ><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Button onClick={() => navigate('/signup')}>Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;