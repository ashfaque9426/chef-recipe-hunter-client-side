// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useRouteError } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    const {error, status} = useRouteError();
    
    return (
        <section style={{height: '100vh'}} className='d-flex flex-column flex-md-row gap-2 justify-content-center align-items-center text-center'>
            <h2 className='fs-5 fw-bold errStatus'>{status}</h2>
            <div style={{ borderLeft: "7px solid var(--secondary-background)"}} className='ps-2 pt-3 pb-3 text-danger fw-semibold errMsg'>{error.message}</div>
        </section>
    );
};

export default ErrorPage;