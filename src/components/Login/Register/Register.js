import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import FormLogo from '../../../Assets/logo2.png'
import LoginWithGoogle from '../SocailLogin/LoginWithGoogle';
import '../Login/Login.css'

const Register = () => {
    const navigate = useNavigate();
    return (
        <div className="login-main text-center">
            <div className="form-logo">
                <img height={80} src={FormLogo} alt="" />
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Your Full Name" name="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <NavLink onClick={navigate('/login')}> Already have an account ?</NavLink>
            <p className='text-center' style={{ "font-size": "20px", "margin": "30px 0" }}>Or</p>
            <LoginWithGoogle></LoginWithGoogle>
        </div>
    );
};

export default Register;