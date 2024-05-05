import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Root = () => {
    return (
        <div className='px-28'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;