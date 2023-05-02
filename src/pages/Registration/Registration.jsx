/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Registration = () => {
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const {createUser, setUser} = useContext(AuthContext);

    const handleRegistration = e => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const photoUrl = form.photo.value;

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setEmailError("email address doesnot match the required pattern of one or more alphanumeric characters and @ symbol")
        }
        else if (!/^(?=.*[A-Z]).{6,}$/.test(password)) {
            setPasswordError('password must have one uppercase character and at least 6 characters long');
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            setUser(loggedUser);
            console.log(loggedUser);
        })
        .catch(error => {
            setError(error.message);
        })
    }
    return (
        <>
            <div style={{ height: 'calc(100vh - 20vh)' }} className='d-flex flex-column justify-content-center align-items-center'>
                <h2 className='fw-semibold mb-5'>Register Here</h2>
                <Form onSubmit={handleRegistration} style={{ border: '1px solid var(--secondary-background)' }} className='px-4 py-5 rounded-3'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='mb-2' type="email" name='email' placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            {
                                emailError !== "" ? <p className='text-danger'>{emailError}</p> : "We'll never share your email with anyone else."
                            }
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='mb-2' type="password" name='password' placeholder="Password" />
                        <Form.Text className="text-muted">
                            {
                                passwordError !== "" ? <p className='text-danger'>{passwordError}</p> : "We'll never share your password with anyone else."
                            }
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label>PhotoUrl</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo Url" />
                    </Form.Group>
                    <Form.Text className="text-muted">
                        <p className='mt-4'>Already Have an account? <Link to='/login'>Please Login</Link></p>
                    </Form.Text>
                    <Button style={{ backgroundColor: 'var(--secondary-background)' }} className='text-dark fw-semibold border-0 mb-3' type="submit">
                        Register
                    </Button>

                    {
                        error !== "" ? <p className='text-danger'>{error}</p> : ""
                    }
                </Form>
            </div>
            
        </>
    );
};

export default Registration;