// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const { signIn, signInWithGoogle, signInWithGitHub, setUser } = useContext(AuthContext);

    const handleSignin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setError("");
        setEmailError("");
        setPasswordError("");

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setEmailError("email address doesnot match the required pattern of one or more alphanumeric characters and @ symbol")
        }
        else if (!/^(?=.*[A-Z]).{6,}$/.test(password)) {
            setPasswordError('password must have one uppercase character and at least 6 characters long');
        }

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            setUser(loggedUser);
            console.log(loggedUser);
            form.reset();
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleSingInWithGoogle = () => {
        setError("");

        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            setUser(loggedUser);
            console.log(loggedUser);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleSignInWithGithub = () => {
        setError("");

        signInWithGitHub()
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
                <h2 className='fw-semibold mb-5'>Please Login</h2>
                <Form onSubmit={handleSignin} style={{ border: '1px solid var(--secondary-background)'}} className='px-4 py-5 rounded-3'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='mb-2' type="email" name='email' placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            {
                                emailError !== "" ? <p className='text-danger'>{emailError}</p> : "We'll never share your email with anyone else."
                            }
                        </Form.Text>
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
                    
                    <Form.Text className="text-muted">
                        <p className='mt-4'>New to this website? <Link to='/register'>Register Here</Link></p>
                    </Form.Text>
                    <Button style={{backgroundColor: 'var(--secondary-background)'}} className='text-dark fw-semibold border-0 mb-3' type="submit">
                        Login
                    </Button>

                    {
                        error !== "" ? <p className='text-danger'>{error}</p> : ""
                    }
                </Form>

                <section className='d-flex flex-column flex-md-row mt-5'>
                    <button onClick={handleSingInWithGoogle} className='btn btn-primary fw-semibold mx-2 my-2'>Google Login</button>
                    <button onClick={handleSignInWithGithub} className='btn btn-secondary fw-semibold mx-2 my-2'>Github Login</button>
                </section>
            </div>
        </>
    );
};

export default Login;