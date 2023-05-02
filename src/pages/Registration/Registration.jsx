/* eslint-disable no-unused-vars */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <>
            <div style={{ height: 'calc(100vh - 20vh)' }} className='d-flex flex-column justify-content-center align-items-center'>
                <h2 className='fw-semibold mb-5'>Register Here</h2>
                <Form style={{ border: '1px solid var(--secondary-background)' }} className='px-4 py-5 rounded-3'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We&apos;ll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                        <Form.Text className="text-muted">
                            We&apos;ll never share your password with anyone else.
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label>PhotoUrl</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo Url" />
                    </Form.Group>
                    <Form.Text className="text-muted">
                        <p className='mt-4'>Already Have an account? <Link to='/login'>Please Login</Link></p>
                    </Form.Text>
                    <Button style={{ backgroundColor: 'var(--secondary-background)' }} className='text-dark fw-semibold border-0' type="submit">
                        Register
                    </Button>
                </Form>
            </div>
            
        </>
    );
};

export default Registration;