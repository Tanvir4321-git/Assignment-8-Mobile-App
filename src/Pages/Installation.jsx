import React, { useEffect, useState } from 'react';
import Inastall from '../Components/Inastall';
import { useLoaderData } from 'react-router';
import { getdata } from './utlities';
import { ChevronDown } from 'lucide-react';

const Installation = () => {
    const [data, setdata] = useState([])
    const fetchData=useLoaderData()
    
    useEffect(() => {
        const storedata = getdata()
        const convertData=storedata.map(id=>parseInt(id))
         
      
    
    const installApp=fetchData.filter(inApp=>convertData.includes(inApp.id))
    setdata(installApp)
    }, [])



const handlesort=(type)=>{
    

      
    if(type==='Size High to low'){
        const sortbyHightolow=[...data].sort((a,b)=>a.size-b.size );
        setdata(sortbyHightolow)
    }
      
    if(type==='Size Low to High'){
        const sortbyLowtoHigh=[...data].sort((a,b)=>b.size-a.size );
        setdata(sortbyLowtoHigh)
    }
}

    return (

        <div className='bg-[#f5f5f5] py-10'>
            <div className='max-w-11/12 mx-auto'>
                <h1 className='text-[#001931] font-bold text-5xl text-center'>Your Installed Apps</h1>
                <p className='text-gray-600 text-center my-5'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex justify-between items-center'>
                    <h2 className='text-[#001931] font-semibold text-2xl'>{data.length} Apps Found</h2>
                   

                        <details className="dropdown">
  <summary className="btn m-1"> <div className='flex items-center gap-1'>
                        <h2 className='text-[#001931] font-semibold text-[20px]'>Sort By Size </h2><ChevronDown /> </div></summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>handlesort('Size High to low')}><a>Low to High</a></li>
    <li onClick={()=>handlesort('Size Low to High')}><a>High to low</a></li>
  </ul>
</details>
                   

                </div>
                <div>
                    {
                        data.map(i=><Inastall key={i.id} set={setdata}  i={i}></Inastall>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Installation;