import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event => {
        navigate('/register');
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    if (user) {
        navigate(from, { replace: true });
    }

    let errorOccur;

    if (error) {

        errorOccur = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Sent');
        }
        else {
            toast('Please Enter Your Email First');
        }


    }



    return (
        <div className='w-50 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleSubmit} className='text-start'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="success" type="submit">
                    Log In
                </Button>
            </Form>
            {errorOccur}

            <p className='text-start mt-2'>New to Fridge BD? <span className='text-success' onClick={navigateRegister} role="button" tabindex="0">Register Now</span> </p>

            <p className='text-start mt-2'>Forgot password? <span className='text-success' onClick={resetPassword} role="button" tabindex="0">Reset Now</span> </p>

            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>

    );
};

export default Login;