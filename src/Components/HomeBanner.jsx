import React from 'react';
import playstor from "../assets/images.png"
import appstore from "../assets/icon_appstore__ev0z770zyxoy_large_2x.png"
import bannerimg from '../assets/hero.png'

const HomeBanner = () => {
    return (
        <div className='bg-[#f5f5f5]'>
            <div className='max-w-11/12 mx-auto py-5 md:py-40'>
            <h1 className='font-bold text-3xl md:text-7xl text-center'>We Build <br />
                <span className='bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span>Apps</h1>
            <p className='text-[#627382] text-[20px] text-center my-5'>At HERO.IO  , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
           <div className='flex items-center gap-3 justify-center mb-8'>
             <div className=' flex  items-center gap-2 py-3 px-6 rounded-[5px] border border-[#D2D2D2]'>
                <img className='w-8 h-8 ' src={playstor} alt="" />
                <button><a target='_blank' href="https://play.google.com/store/games?hl=en">Google Play</a></button>
            </div>
            <div className='flex   items-center gap-2 py-3 px-6 rounded-[5px] border border-[#D2D2D2]'>
                <img className='w-8 h-8 ' src={appstore} alt="" />
               <button><a target='_blank' href="https://www.apple.com/app-store/">App Store</a></button>
            </div>
           </div>
           <img className='mx-auto w-[600px]' src={bannerimg} alt="" />


            

        </div>
        </div>
    );
};

export default HomeBanner;