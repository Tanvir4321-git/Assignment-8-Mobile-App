import React from 'react';
import { useLoaderData } from 'react-router';

const Hseciton3 = () => {
    const fetchData=useLoaderData()
    
    return (
        <div className='bg-[#f5f5f5] '>
            <div className='max-w-11/12 mx-auto pt-10'>
<h1 className='font-bold text-5xl text-[#001931] text-center mb-5'>Trending Apps</h1>
<p className='text-[#627382] text-center mb-5'>Explore All Trending Apps on the Market developed by us</p>

<div>
    {
    fetchData.map(data=><h1>g</h1>)
}
</div>
            </div>

        </div>
    );
};

export default Hseciton3;