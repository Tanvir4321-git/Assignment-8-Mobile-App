import { ArrowDownToLine, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const SingaleApp = ({app}) => {
    const{image,companyName,downloads,ratingAvg,id }=app
    return (
       <Link to={`/AppDetails/${id}`}>
        <div>
            <div className='bg-white p-4 rounded-[5px]  shadow-md' >
            <img className='h-[200px] w-[200px] rounded-[10px] mx-auto mb-3' src={image} alt="" />
            <h2 className='font-medium text-[20px] text-[#001931] text-center mb-3'>{companyName}</h2>
            <div className='flex items-center justify-between  w-[200px] mx-auto '>
                <p className='text-[#00D390] flex items-center gap-2 '><ArrowDownToLine /> {downloads}</p>
                <p className='text-[#FF8811] flex items-center gap-2 '><Star /> {ratingAvg}</p>
            </div>
        </div>
        </div>
       </Link>
    );
};

export default SingaleApp;