// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";

const Footer = () => {
    return (
        <footer style={{marginTop: "150px"}} className='Myfooter'>
            <section className='d-flex flex-column flex-lg-row justify-content-around align-items-center align-items-lg-start myFooterDiv1'>
                <section className='mb-3'>
                    <p className='text-warning'>Privacy Policy</p>
                    <p className='text-warning'>Terms and Conditions</p>
                </section>
                <section className='mb-3'>
                    <p className='text-warning'>Apply for MasterChef Maxico</p>
                    <p className='text-warning'>Apply for MasterChef: The Professionals</p>
                    <p className='text-warning'>Apply for Young MasterChef</p>
                    <p className='text-warning'>MasterChef BBC page</p>
                </section>
                <section>
                    <h6>Follow The Food Artisan on</h6>
                    <div className='d-flex justify-content-around align-items-center fs-3 mt-3 iconDiv'>
                        <FiFacebook />
                        <FiTwitter />
                        <FiInstagram />
                        <FiYoutube />
                    </div>
                </section>
            </section>
            <section style={{height: "100px"}} className='d-flex justify-content-center align-items-center text-center bg-dark mt-4'>
                <p className='px-2'>All Rights Reserved @The-Food-Artisan Maxican Comunity</p>
            </section>
        </footer>
    );
};

export default Footer;