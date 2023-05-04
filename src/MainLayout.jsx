/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Header from './components/shared/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodAndWine from './components/CustomSections/FoodAndWine/FoodAndWine';
import { ToastContainer } from 'react-toastify';
import MasterChefChampion from './components/MasterChefChampion/MasterChefChampion';

const MainLayout = () => {
    const location = useLocation();

    return (
        <>
            <Header />
            {
                location.pathname === '/' ? <MasterChefChampion /> : ''
            }
            <main className='mainSection d-flex flex-column justify-content-center align-items-center' style={{width: '75%', margin: "auto"}} role='main'>
                <Outlet />
                {
                    location.pathname === '/'? <FoodAndWine /> : ''
                }
            </main>
            <ToastContainer />
            <Footer />
        </>
    );
};

export default MainLayout;