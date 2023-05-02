// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';

const Header = () => {
    return (
        <header>
            <section className='d-flex flex-column flex-md-row justify-content-md-around align-items-center py-3 gap-3' role='navigation'>
                <h1><Link className='text-decoration-none text-white fs-3 fw-bold' to='/'>The Food Artisan</Link></h1>
                <NavigationBar />
                <section className='d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center'>
                    <img title='my image' style={{width: "50px", height: "50px", border: "1px solid yellow", borderRadius: "50%"}} src="" alt="profile picture" />
                    <Link to='/login'><button style={{ backgroundColor: "var(--secondary-background)"}} className='btn text-dark fw-bold'>Login</button></Link>
                </section>
            </section>
            
        </header>
    );
};

export default Header;