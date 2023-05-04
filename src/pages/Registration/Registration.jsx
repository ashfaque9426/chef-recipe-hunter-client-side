/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import './Registration.css'

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [disableBtn, setDisableBtn] = useState(true);
    const [redirection, setRedirection] = useState(false);

    const { createUser, updataUserProfile, logOut } = useContext(AuthContext);

    const handleRegistration = e => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            
            if(name && photoUrl || name || photoUrl) {
                updataUserProfile(loggedUser, name, photoUrl)
                .then(()=> {
                    console.log(loggedUser);
                })
                .catch(error => console.log(error.message))
            }

            setEmail("");
            setPassword("");
            setSuccess("Registration Successfull");
            logOut();
            setTimeout(() => {
                setRedirection(true)
            }, 1000)
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleEmail = e => {
        const emailInput =  e.target.value;
        setEmail(emailInput);

        setEmailError("");

        if(!emailInput.includes("@")) {
            setEmailError("plese include a @ sign in your email");
        } else if (!/\.[a-zA-Z]{2,}/.test(emailInput)) {
            setEmailError("Please include a top level domain name");
        }else {
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

    const handlePassword = e => {
        const passwordInput = e.target.value;
        setPassword(passwordInput);

        setPasswordError('')
        
        if (passwordInput.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
        } else if (!/[A-Z]+/.test(passwordInput)) {
            setPasswordError("Passwod must contain at least one capital letter");
        }else {
            setPasswordError("");
        }

        if (email.length !== 0 && password.length !== 0) {
            setDisableBtn(false);
        }

        if (passwordInput.length === 0) {
            setPasswordError("");
            setDisableBtn(true);
        }
    }

    
    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h2 style={{marginTop: "100px"}} className='fw-semibold mb-5'>Register Here</h2>
                <Form onSubmit={handleRegistration} style={{ border: '1px solid var(--secondary-background)', minWidth: "400px" }} className='px-4 py-5 rounded-3 myFormReg'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address<span className='fs-3'>*</span></Form.Label>
                        <Form.Control className='mb-2' type="email" value={email} onChange={handleEmail} name='email' placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            {
                                emailError !== "" ? <p style={{ minHeight: "24px" }} className='text-danger'>{emailError}</p> : "We'll never share your email with anyone else."
                            }
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password<span className='fs-3'>*</span></Form.Label>
                        <Form.Control className='mb-2' type="password" value={password} onChange={handlePassword} name='password' placeholder="Password" />
                        <Form.Text className="text-muted">
                            {
                                passwordError !== "" ? <p style={{ minHeight: "24px" }} className='text-danger'>{passwordError}</p> : "Your Password is safe"
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
                    <Button disabled={disableBtn} style={{ backgroundColor: 'var(--secondary-background)' }} className='text-dark fw-semibold border-0 mb-3' type="submit">
                        Register
                    </Button>

                    {
                        error !== "" ? <p className='text-danger'>{error}</p> : <p className='text-success fw-bold'>{success}</p>
                    }
                </Form>
                {
                    redirection && <Navigate to='/login' replace={true} />
                }
            </div>
            
        </>
    );
};

export default Registration;