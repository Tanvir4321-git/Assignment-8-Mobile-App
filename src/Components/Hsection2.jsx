import React from 'react';

const Hsection2 = () => {
    return (
    <div className='bg-gradient-to-tr from-[#632EE3] to-[#9F62F2]  -mt-[160px]'>
            <div className='w-11/12 mx-auto p-[80px]'>
            <h1 className='text-5xl font-bold text-white text-center'>Trusted by Millions, Built for You</h1>
          <div className='flex justify-evenly mt-14'>
              <div className='text-white space-y-3 '>
                <p className='text-center'>Total Downloads</p>
                <h2 className='font-extrabold text-6xl'>29.6M</h2>
                <p>21% more than last month</p>
            </div>
              <div className='text-white space-y-3 '>
                <p className='text-center'>Total Reviews</p>
                <h2 className='font-extrabold text-6xl'>906K</h2>
                <p>46% more than last month</p>
            </div>
              <div className='text-white space-y-3 '>
                <p className='text-center'>Active Apps</p>
                <h2 className='font-extrabold text-6xl'>132+</h2>
                <p>31 more will Launch</p>
            </div>
          </div>
        </div>
    </div>
    );
};

export default Hsection2;