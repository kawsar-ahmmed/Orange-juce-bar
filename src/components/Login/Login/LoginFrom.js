import React from 'react';
import './Login.css'
import { Button, Col, Form, Row } from 'react-bootstrap';
import FormLogo from '../../../Assets/logo2.png'
import { NavLink, useNavigate } from 'react-router-dom';



const LoginFrom = () => {
    const navigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();
        console.log(event.target.email.value)
        // const agree= event.target.trams.checked;

    }
    return (
        <Row>
            <Col className=''>
                <div className="login-main text-center">
                    <div className="form-logo">
                        <img height={80} src={FormLogo} alt="" />
                    </div>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" name="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <NavLink onClick={navigate('/register')}> Create an account ?</NavLink>
                </div>
            </Col>
        </Row>
    );
};


export default LoginFrom;