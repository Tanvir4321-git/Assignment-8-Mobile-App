import React from 'react';
import error from '../assets/App-Error.png'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router';

const Error = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className='bg-[#f5f5f5]'>
            <div className='max-w-11/12 mx-auto p-20 space-y-5'>

<img className='mx-auto' src={error} alt="" />
<h2 className='text-[#001931] font-semibold text-5xl text-center'>Oops, page not found!</h2>
<p className='text-[#627382] text-center'>Oops, page not found!</p>
<div className=' bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] flex justify-center mx-auto py-3 px-4 w-[150px] rounded-[10px] '>
   
    
    <Link  className=" text-center text-white font-semibold">Go Back</Link>
</div>
            </div>
            
        </div>
        <Footer></Footer>
        </>
    );
};

export default Error;