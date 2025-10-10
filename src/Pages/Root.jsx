import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Error from './Error';
import { ToastContainer} from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
           
            <Footer></Footer>
             <ToastContainer />
        </div>
    );
};

export default Root;