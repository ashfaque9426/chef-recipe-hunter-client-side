// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className='d-flex align-items-center'>
            <ul className="list-unstyled m-0 d-inline-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
                <li><NavLink className={({isActive}) => isActive? 'text-decoration-underline text-warning' : 'text-decoration-none text-white'} to='/'>Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive? 'text-decoration-underline text-warning' : 'text-decoration-none text-white'} to='/blog'>Blog</NavLink></li>
                <li><NavLink className={({isActive}) => isActive? 'text-decoration-underline text-warning' : 'text-decoration-none text-white'} to='/register'>Register Now</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;