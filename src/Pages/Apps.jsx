import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import SingaleApp from '../Components/SingaleApp';

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
            searchData.length===0?'no data':<div className='grid grid-cols-4 gap-5'>
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