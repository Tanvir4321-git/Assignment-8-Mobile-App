import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import HsingaleData from './HsingaleData';


const Hseciton3 = () => {
    const fetchData = useLoaderData()
   

    return (
        <div className='bg-[#f5f5f5] pb-8'>
            <div className='max-w-11/12 mx-auto pt-10'>
                <h1 className='font-bold text-5xl text-[#001931] text-center mb-5'>Trending Apps</h1>
                <p className='text-[#627382] text-center mb-5'>Explore All Trending Apps on the Market developed by us</p>

              <div className='grid grid-cols-4 gap-5'>
                    {
                        fetchData.map(data => <HsingaleData key={data.id} data={data}></HsingaleData>)
                    }
                </div>
            </div>

                <Link to='/app' className=" bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] flex justify-center mx-auto py-2 px-3 w-[150px] rounded-[10px] mt-5   text-center text-white font-semibold">See All</Link> 
        

        </div>
    );
};

export default Hseciton3;