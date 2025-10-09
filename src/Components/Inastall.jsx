import { ArrowDownToLine, Star } from 'lucide-react';

import { getdata } from '../Pages/utlities';

const Inastall = ({i,set}) => {
    const {image,ratingAvg,downloads,size,companyName,id}=i



const handleUninstall=(id)=>{

    const storedata=getdata()
    const storedataStr=storedata.map(st=>parseInt(st))
     const update=storedataStr.filter(stid => stid !== id)
    
     const converyStringfy=JSON.stringify(update)
      localStorage.setItem('installedApp',converyStringfy)
       set(prev => prev.filter(item => item.id !== id));
 
}

    return (
        <div className='bg-white my-5 shadow-md p-5'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='w-15' src={image} alt="" />
                    <div>
                      <h3>  {companyName}</h3>
                      <div className='flex items-center justify-between  w-[100px] gap-4 mt-2 '>
                                      <p className='text-[#00D390] flex items-center '><ArrowDownToLine /> {downloads}</p>
                                      <p className='text-[#FF8811] flex items-center '><Star /> {ratingAvg}</p>
                                      <p className='text-gray-400'>{size}mb</p>
                                  </div>
                    </div>
                </div>
                <div><button onClick={()=>handleUninstall(id)} className='bg-[#00D390] py-3 px-4 text-white rounded-[5px]'>Uninstall</button></div>
            </div>
            
        </div>
    );
};

export default Inastall;