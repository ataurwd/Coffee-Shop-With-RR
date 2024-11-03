import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='h-16'>
            <NavBar/>
            </div>
            <div className='min-h-[calc(100vh-132px)] px-12'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;