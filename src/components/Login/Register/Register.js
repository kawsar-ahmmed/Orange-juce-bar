import React, { useState } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import FormLogo from '../../../Assets/logo2.png'
import LoginWithGoogle from '../SocailLogin/LoginWithGoogle';
import '../Login/Login.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init'


const Register = () => {
    const navigate = useNavigate();
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            // Passwords don't match, display error message or handle the error
            const passwordError = ('Passwords do not match');
            return;
        }
        createUserWithEmailAndPassword(email, password, name);
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <Spinner className='text-center' animation="border" variant="success" />;
    }
    if (user) {
        return (
            navigate('/home')
        );
    }
    return (
        <div className="login-main text-center">
            <div className="form-logo">
                <img height={80} src={FormLogo} alt="" />
            </div>
            <Form onSubmit={handleCreateUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Full Name" name="name" value={name}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" name="email" value={email}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" name='password' value={password}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" name='password' value={confirmPassword}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <NavLink> Already have an account ?</NavLink>
            <p className='text-center' style={{ fontSize: '20px', "margin": "30px 0" }}>Or</p>
            <LoginWithGoogle></LoginWithGoogle>
        </div>
    );
};

export default Register;