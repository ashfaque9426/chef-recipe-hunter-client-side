// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, status} = useRouteError();
    
    return (
        <section style={{height: '100vh'}} className='d-flex gap-2 justify-content-center align-items-center'>
            <h2 className='fs-5 fw-bold'>{status}</h2>
            <div style={{ borderLeft: "7px solid var(--secondary-background)"}} className='ps-2 pt-3 pb-3 text-danger fw-semibold'>{error.message}</div>
        </section>
    );
};

export default ErrorPage;