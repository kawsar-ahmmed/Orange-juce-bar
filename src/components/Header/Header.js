import React, { useEffect, useState } from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { onAuthStateChanged } from "firebase/auth";
import auth from '../../firebase/firebase.init';
import { useSignOut } from 'react-firebase-hooks/auth';






const Header = () => {
    const navigate = useNavigate();
    const [signOut, loading, error] = useSignOut(auth);
    // 
    const [user, setUser] = useState();
    useEffect(() => {
        onAuthStateChanged(auth, (user => {
            setUser(user)
        }))
    }, [])
    console.log(user)
    const handleSignOut = async () => {
        try {
            await signOut(auth);
            alert('You are signed out');
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Navbar style={{ "height": "80px" }} collapseOnSelect expand="lg" className='fixed-top'>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} height={40} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 menu-full ">
                        <Nav.Link ><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>

                        {user ? (
                            <>
                                <Button onClick={handleSignOut}>Sign Out</Button>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Button onClick={() => navigate('/signup')}>Sign Up</Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;