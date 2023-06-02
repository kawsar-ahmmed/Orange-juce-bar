import React, { useState } from 'react';
import './Login.css'
import { Button, Col, Form, Row } from 'react-bootstrap';
import FormLogo from '../../../Assets/logo2.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';



const LoginFrom = () => {
    const navigate = useNavigate();
    const handleLoginWithPassword = event => {
        event.preventDefault();
        
        signInWithEmailAndPassword(email, password)
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            navigate('/home')
        );
    }
    return (
        <Row>
            <Col className=''>
                <div className="login-main text-center">
                    <div className="form-logo">
                        <img height={80} src={FormLogo} alt="" />
                    </div>
                    <Form onSubmit={handleLoginWithPassword}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" name="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button onClick={() => signInWithEmailAndPassword(email, password)} variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
                <NavLink to={'/register'}> Create an account.</NavLink>
            </Col>
        </Row>
    );
};


export default LoginFrom;