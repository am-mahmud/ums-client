import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoutes = ({children}) => {

    const {user, loading} = use(AuthContext);

    const location = useLocation();


    if (loading){
        return 
    }
    if(user ){
        return children;
    }

    return <Navigate state={location?.pathname} to="/login"></Navigate>
};

export default PrivetRoutes;