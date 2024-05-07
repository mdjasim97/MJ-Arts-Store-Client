import React, { useContext } from 'react';
import { AuthContext } from '../Context/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if (loader) {
        return <div className='min-h-screen flex items-center justify-center'>
            <span className="text-9xl loading loading-spinner loading-lg"></span>
        </div>
    }

    if(user){
        return children
    }

    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoutes;