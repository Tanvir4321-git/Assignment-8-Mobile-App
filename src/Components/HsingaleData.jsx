import { ArrowDownToLine,  Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
const HsingaleData = ({data}) => {
const {id}=data
    return (
        <Link to={`/AppDetails/${id}`}>
        <div className='bg-white p-4 rounded-[5px]  shadow-md' >
            <img className='h-[200px] w-[200px] rounded-[10px] mx-auto mb-3' src={data.image} alt="" />
            <h2 className='font-medium text-[20px] text-[#001931] text-center mb-3'>{data.companyName}</h2>
            <div className='flex items-center justify-between  w-[200px] mx-auto '>
                <p className='text-[#00D390] flex items-center gap-2 '><ArrowDownToLine /> {data.downloads}</p>
                <p className='text-[#FF8811] flex items-center gap-2 '><Star /> {data.ratingAvg}</p>
            </div>
        </div>
        </Link>
    );
};

export default HsingaleData;