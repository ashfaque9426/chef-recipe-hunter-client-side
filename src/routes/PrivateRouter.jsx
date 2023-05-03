/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if (loading) return <div style={{minHeight: "calc(100vh - 30vh)"}} className='d-flex justify-content-center align-items-center' >
        <Spinner animation="border" variant="danger" />
    </div>;

    if(user) return children;

    return <Navigate state={{from: location}} to='/login' replace />
};

export default PrivateRouter;