/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainLayout = () => {
    return (
        <>
            <Header />
            <main style={{width: '75%', margin: "auto"}} role='main'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;