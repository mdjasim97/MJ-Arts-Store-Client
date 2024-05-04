import React, { useContext } from 'react';
import { AuthContext } from '../Context/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if(user){
        return children
    }

    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoutes;