import { Download, Star, UserStar } from 'lucide-react';
import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { setData } from '../Pages/utlities';

const AppDetails = () => {
    const {id}=useParams();
    const newid=Number(id)
    const AppData=useLoaderData()
    const detailsData=AppData.find(f=>f.id===newid)
const {image,companyName,developerBy,downloads,ratingAvg,reviews,size,ratings,description }=detailsData ||{}

const [visible, setVisible]=useState(true)

const handleClick=(id)=>{
setVisible(false)
setData(id)

}


    return (
        <div className='bg-[#f5f5f5] py-10'>
           <div className='max-w-11/12 mx-auto '>
            <div className='flex items-center gap-5  pb-10'>
                 <div className="w-1/3 ">
            <img className='bg-white p-6' src={image} alt="" />
            </div>
            <div className="w-2/3">
            <h2 className='text-[#001931] font-bold text-3xl mb-2'>{companyName}</h2>
            <p className='text-[#627382]'>Developed by: <span className='text-blue-600'>{developerBy}</span></p>
            <div className='border-t-2 border-gray-300 mt-7 py-5 flex items-center justify-start gap-8'>
                <div className='space-y-3' >
                  <Download color="#00D390" />
                    <p className='text-[#001931]'>Downloads</p>
                    <h2 className='text-[#001931] font-extrabold text-4xl'>{downloads}</h2>
                    
                
                </div>
                
                <div className='space-y-3' >
                   <Star color="#FF8811" />
                    <p className='text-[#001931]'>Average Ratings</p>
                    <h2 className='text-[#001931] font-extrabold text-4xl'>{ratingAvg}</h2>
                    
                
                </div>
                
                <div className='space-y-3' >
                   <UserStar color="#632EE3" />
                    <p className='text-[#001931]'>Total Reviews</p>
                    <h2 className='text-[#001931] font-extrabold text-4xl'>{reviews}</h2>
                    
                
                </div>
                
                

            </div>
            <button onClick={()=>handleClick(id)} className={`py-3 px-5 text-white bg-[#00D390] rounded-[5px] ${visible===false?'disabled:':''}`}>{visible===true?<div>Install Now (<span>{size}mb</span>)</div>:'Installed'} </button>
            </div>
            </div>

   <div className='w-[100%] h-[500px] border-y-2 border-gray-300 py-10 '>
    <ResponsiveContainer >
        <BarChart width={500} height={300} data={ratings} layout='vertical'>
            <XAxis type="number"></XAxis>
            <YAxis dataKey="name" type="category"></YAxis>
            <Tooltip></Tooltip>
            <Bar dataKey="count" fill="orange"     ></Bar>

        </BarChart>
    </ResponsiveContainer>
   </div>
   <h2 className='text-[#001931] text-2xl font-semibold my-5'>Description</h2>
   <p>{description}</p>

           </div>
        </div>
    );
};

export default AppDetails;