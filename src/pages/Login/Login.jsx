// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div style={{ height: 'calc(100vh - 20vh)' }} className='d-flex flex-column justify-content-center align-items-center'>
                <h2 className='fw-semibold mb-5'>Please Login</h2>
                <Form style={{ border: '1px solid var(--secondary-background)'}} className='px-4 py-5 rounded-3'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We&apos;ll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                        <Form.Text className="text-muted">
                            We&apos;ll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Text className="text-muted">
                        <p className='mt-4'>New to this website? <Link to='/register'>Register Here</Link></p>
                    </Form.Text>
                    <Button style={{backgroundColor: 'var(--secondary-background)'}} className='text-dark fw-semibold border-0' type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default Login;