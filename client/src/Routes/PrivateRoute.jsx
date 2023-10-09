import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, redirect, useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

const PrivateRoute = ({ children }) => {
	const userData = useSelector((state) => state.user);

	const { user, status, error } = userData;
	const location = useLocation();
	if (status === 'loading') {
		return <Loading />;
	}

	if (user._id) {
		return children;
	}
	return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
