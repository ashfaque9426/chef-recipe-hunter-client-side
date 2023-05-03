// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import HomePageBanner from '../../Banners/HomePageBanner/HomePageBanner';
import chefImg from '../../../assets/banner-images/chefImg.jpg';
import '../Header/Header.css';
import { AuthContext } from '../../../providers/AuthProvider';
import userIcon from '../../../assets/icons/userIcon.png'

const Header = () => {
    const location = useLocation();
    const {user, logOut} = useContext(AuthContext);
    console.log(user);
    return (
        <header style={location.pathname === '/' ? { backgroundImage: `url(${chefImg})`, backgroundSize: 'cover', backgroundPosition: "center" } : { backgroundColor: "var(--primary-background)"}}>
            <section className='d-flex flex-column flex-md-row justify-content-md-around align-items-center py-3 gap-3 myNav' role='navigation'>
                <h1><Link className='text-decoration-none text-white fs-3 fw-bold' to='/'>The Food Artisan</Link></h1>
                <NavigationBar />

                {
                    user !== null ? user.photoURL !== null ? <section className='d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center'>
                        <img title={user.displayName !== null ? user.displayName : ""} style={{ width: "50px", height: "50px", borderRadius: "50%" }} src={user.photoURL} alt="profile picture" />

                        <button onClick={logOut} style={{ backgroundColor: "var(--secondary-background)" }} className='btn text-dark fw-bold'>Logout</button>
                    </section>
                        : <section className='d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center'>
                            <img title={user.displayName !== null ? user.displayName : ""} style={{ width: "50px", height: "50px", borderRadius: "50%" }} src={userIcon} alt="profile picture" />

                            <button onClick={logOut} style={{ backgroundColor: "var(--secondary-background)" }} className='btn text-dark fw-bold'>Logout</button>
                        </section>
                        
                        : <section className='d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center'>
                            <Link to='/login'><button style={{ backgroundColor: "var(--secondary-background)" }} className='btn text-dark fw-bold'>Login</button></Link>
                        </section>
                }
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