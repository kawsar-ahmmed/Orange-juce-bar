import React from 'react';
import './LoginWithGoogle.css'
import GoogleIcone from '../../../Assets/google.png'

const LoginWithGoogle = () => {
    return (
        <div className='social-button text-center'>
            <button className='social-google-button'>
                <img height={20} src={GoogleIcone} alt="" />
                Sign in with google
            </button>
        </div>
    );
};

export default LoginWithGoogle;