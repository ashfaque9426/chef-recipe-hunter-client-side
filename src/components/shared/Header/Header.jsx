// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import HomePageBanner from '../../Banners/HomePageBanner/HomePageBanner';
import chefImg from '../../../assets/banner-images/chefImg.jpg';
import '../Header/Header.css';
const Header = () => {
    const location = useLocation();
    return (
        <header style={location.pathname === '/' ? { backgroundImage: `url(${chefImg})`, backgroundSize: 'cover', backgroundPosition: "center" } : { backgroundColor: "var(--primary-background)"}}>
            <section className='d-flex flex-column flex-md-row justify-content-md-around align-items-center py-3 gap-3 myNav' role='navigation'>
                <h1><Link className='text-decoration-none text-white fs-3 fw-bold' to='/'>The Food Artisan</Link></h1>
                <NavigationBar />
                <section className='d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center'>
                    <img title='my image' style={{width: "50px", height: "50px", border: "1px solid yellow", borderRadius: "50%"}} src="" alt="profile picture" />
                    <Link to='/login'><button style={{ backgroundColor: "var(--secondary-background)"}} className='btn text-dark fw-bold'>Login</button></Link>
                </section>
            </section>
            <section>
                {
                    location.pathname === '/' ? <HomePageBanner /> : ""
                }
            </section>
        </header>
    );
};

export default Header;