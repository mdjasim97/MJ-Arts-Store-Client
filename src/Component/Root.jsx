import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Root = () => {
    return (
        <div className='lg:px-28'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;