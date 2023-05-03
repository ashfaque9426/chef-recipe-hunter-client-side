// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [disableBtn, setDisableBtn] = useState(true);

    const { signIn, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);

    const handleSignin = e => {
        e.preventDefault();
        const form = e.target;

        setError("");
        setEmailError("");
        setPasswordError("");

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleEmail = e => {
        const emailInput = e.target.value;
        setEmail(emailInput);

        setEmailError("");

        if (!emailInput.includes("@")) {
            setEmailError("plese include a @ sign in your email");
        } else if (!/\.[a-zA-Z]{2,}/.test(emailInput)) {
            setEmailError("Please include a top level domain name");
        } else {
            setEmailError("");
        }

        if (email.length !== 0 && password.length !== 0) {
            setDisableBtn(false);
        }

        if (emailInput.length === 0) {
            setEmailError("");
            setDisableBtn(true);
        }
        
    }

    const handlePassowrd = e => {
        const passwordInput = e.target.value;
        setPassword(passwordInput);

        if (passwordInput.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
        } else if (!/[A-Z]+/.test(passwordInput)) {
            setPasswordError("Passwod must contain at least one capital letter");
        } else {
            setPasswordError("");
        }

        if (email.length !== 0 && password.length !== 0) {
            setDisableBtn(false);
        }

        if(passwordInput.length === 0) {
            setPasswordError("");
            setDisableBtn(true);
        }
    }

    const handleSingInWithGoogle = () => {
        setError("");

        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
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
            console.log(loggedUser);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h2 style={{marginTop: "100px"}} className='fw-semibold mb-5'>Please Login</h2>
                <Form onSubmit={handleSignin} style={{ border: '1px solid var(--secondary-background)', minWidth: "400px" }} className='px-4 py-5 rounded-3 myFormLog'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address<span className='fs-3'>*</span></Form.Label>
                        <Form.Control className='mb-2' type="email" value={email} onChange={handleEmail} name='email' placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            {
                                emailError !== "" ? <p style={{minHeight: "24px"}} className='text-danger'>{emailError}</p> : "We'll never share your email with anyone else."
                            }
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password<span className='fs-3'>*</span></Form.Label>
                        <Form.Control className='mb-2' type="password" value={password} onChange={handlePassowrd} name='password' placeholder="Password" />
                        <Form.Text className="text-muted">
                            {
                                passwordError !== "" ? <p  style={{minHeight: "24px"}} className='text-danger'>{passwordError}</p> : "Your password is safe."
                            }
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Text className="text-muted">
                        <p className='mt-4'>New to this website? <Link to='/register'>Register Here</Link></p>
                    </Form.Text>
                    <Button disabled={disableBtn} style={{backgroundColor: 'var(--secondary-background)'}} className='text-dark fw-semibold border-0 mb-3' type="submit">
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