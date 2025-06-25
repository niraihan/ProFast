import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../component/NavBar/NavBar';
import Footer from '../component/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;