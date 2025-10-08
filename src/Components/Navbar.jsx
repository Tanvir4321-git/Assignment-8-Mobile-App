import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import Btnimg from '../assets/GitHub-logo-006b47c9b39d1112b0e8b9d8472f91a2.png'


const Navbar = () => {
    return (
     <div className='bg-base-100 shadow-sm py-4'>
          <div className="navbar max-w-11/12 mx-auto ">
  <div className="navbar-start  ">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li className='hover:bg-emerald-500 hover:text-white rounded-[5px]'><NavLink to='/'>Home</NavLink></li>
      <li  className='hover:bg-emerald-500 hover:text-white rounded-[5px]' ><NavLink to='/app'>App</NavLink></li>
      <li  className='hover:bg-emerald-500 hover:text-white rounded-[5px]'> <NavLink to='/install'>Installation</NavLink></li>
      </ul>
    </div>
    
  <Link to='/'>
    <div className='flex items-center gap-2'>
        <img className='w-10 h-10' src={logo} alt="" />
        <h1 className='font-bold bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent '>HERO.IO</h1>
    </div>
  </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold ">
      <li className='hover:bg-emerald-500 hover:text-white rounded-[5px]'><NavLink to='/'>Home</NavLink></li>
      <li  className='hover:bg-emerald-500 hover:text-white rounded-[5px]' ><NavLink to='/app'>App</NavLink></li>
      <li  className='hover:bg-emerald-500 hover:text-white rounded-[5px]'> <NavLink to='/install'>Installation</NavLink></li>
      
    </ul>
  </div>
  <div className="navbar-end ">
<div className=' bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] py-3 px-4 flex items-center rounded-[10px] gap-1'>
     <img className='w-10' src={Btnimg} alt="" />
    <a className=" text-white font-semibold" href='https://github.com/Tanvir4321-git'>Contribute</a>
</div>
  </div>
</div>
     </div>
    );
};

export default Navbar;