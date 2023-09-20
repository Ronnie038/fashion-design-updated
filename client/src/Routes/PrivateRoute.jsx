import React, { useState } from 'react';
import { Navigate, redirect } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const [user, setUser] = useState(true);

    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;