import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const PrivetRoutes = ({children}) => {

   const {user, loading} = use(AuthContext);

    const location = useLocation();


    if (loading){
        return 
    }
    if(user ){
        return children;
    }

    return <Navigate state={location?.pathname} to="/signin"></Navigate>
};

export default PrivetRoutes;