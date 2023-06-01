import React from 'react';
import './Login.css'
import LoginFrom from './LoginFrom';
import { Container } from 'react-bootstrap';
import LoginWithGoogle from '../SocailLogin/LoginWithGoogle';



const Login = () => {

    return (
        <div className="from-container-main">
            <Container>
                <div className="login-full login-main">

                    <LoginFrom></LoginFrom>
                    <p className='text-center' style={{ "font-size": "20px", "margin": "30px 0" }}>Or</p>
                    <LoginWithGoogle></LoginWithGoogle>
                </div>
            </Container>
        </div>
    );
};

export default Login;