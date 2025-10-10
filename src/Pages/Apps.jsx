import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import SingaleApp from '../Components/SingaleApp';
import noapp from '../assets/App-Error.png'

const Apps = () => {
    const allapp=useLoaderData();
    const [search,setSearch]=useState('')
    const tram=search.trim().toLowerCase()
    const searchData=tram?allapp.filter(s=>s.companyName.toLowerCase().includes(tram)):allapp
    
    return (
        <div className='bg-[#f5f5f5] pt-14 pb-5'>
       <div className='max-w-11/12 mx-auto'>
       <h1 className='text-[#001931] font-bold text-5xl text-center'>Our All Applications</h1>
       <p className='text-[#627382] text-center my-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
       <div className='mb-4 flex items-center justify-between'>
        <h3 className='font-semibold'> Apps Found ({searchData.length})</h3>
        
          <div >
           
              <input value={search} onChange={(e)=>setSearch(e.target.value)} className='border-2  border-gray-600 p-1 rounded-[5px]' type="search" name="" id="" placeholder='Search here' />  <button className='mr-3 bg-sky-700 py-1 px-3 rounded-[5px] border-2  border-black text-white'>Search</button>
          </div>
            
            
       
       </div>
         {
            searchData.length===0?<div className=' p-7 md:p-20 space-y-5'>

<img className='mx-auto ' src={noapp} alt="" />
<h2 className='text-[#001931] font-semibold text-2xl md:text-5xl text-center'>OPPS!! APP NOT FOUND</h2>
<p className='text-[#627382] text-center'>The App you are requesting is not found on our system.  please try another apps</p>
<div className=' bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] flex justify-center mx-auto py-3 px-4 w-[150px] rounded-[10px] '>
   
    
    <Link className=" text-center text-white font-semibold">Go Back</Link>
</div>
            </div>:<div className='grid grid-cols-4 gap-5'>
            {
                searchData.map(app=><SingaleApp key={app.id} app={app}></SingaleApp>)
            }
        </div>
         }
         
            
            
        
       </div>
        </div>
    );
};

export default Apps;