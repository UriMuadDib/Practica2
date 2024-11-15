/* eslint-disable no-unused-vars */
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthRoute = ({ type }) => {
    
    const isAuthenticated = Boolean(
        JSON.parse(localStorage.getItem('user'))?.token
    );
    if (type === 'protected' && !isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (type === 'public' && isAuthenticated) {
        return <Navigate to="/" />;
    }


    if (type === 'admin' && (!isAuthenticated || JSON.parse(localStorage.getItem('user')).boleta !== 'admin077')) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

AuthRoute.propTypes = {
    type: PropTypes.oneOf(['protected', 'public','admin']).isRequired,
};
export const isLoggedIn = Boolean(
    JSON.parse(localStorage.getItem('user'))?.token
);



