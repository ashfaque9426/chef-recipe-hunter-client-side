// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const HomePageBanner = () => {
    return (
        <section style={{ height: 'calc(100vh - 20vh)' }} role='banner' className='d-flex flex-column justify-content-center align-items-center text-center px-2'>
            <h1>Welcome to our The Food Artisan</h1>
            <Link to='/blog'><button style={{ backgroundColor: 'var(--secondary-background)' }} className='btn text-dark fs-3 fw-bold my-3'>Explore More</button></Link>
        </section>
    );
};

export default HomePageBanner;