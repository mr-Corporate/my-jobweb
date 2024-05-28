import React from 'react'
// import { main_logo } from '../assets/navbar'
import PersonIcon from '@mui/icons-material/Person';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { main_pic } from '../assets/navbar';
export default function Header() {


  return (
   <nav className='w-full flex items-center justify-between h-18 main-container  mb-32 border-bottom sticky top-0 bg-slate-50'>
    <div className='w-3/4 h-full'>
      <img src={main_pic.src} alt="" />
    </div>
    <div className='w-full h-full flex justify-between items-center'>
      <span className='w-fit h-full text-teal-600 cursor-pointer flex items-center justify-center p-2 font-bold'>
      <p className=''>Home</p>
      </span>
      <span className='w-fit h-full text-teal-600 cursor-pointer flex items-center justify-center p-2 font-bold'>
      <p className=''>About</p>
      </span>
      <span className='w-fit h-full text-teal-600 cursor-pointer flex items-center justify-center p-2 font-bold'>
      <p>Employer</p>
      </span>
      <span className='w-fit h-full text-teal-600 cursor-pointer flex items-center justify-center p-2 font-bold'>
      <p>Blog</p>
      </span>
      <span className='w-fit h-full text-teal-600 cursor-pointer flex items-center justify-center p-2 font-bold'>
      <p>Contact</p>
      </span>
      <span className='w-fit h-full text-teal-600 cursor-pointer flex items-center justify-center p-2 font-bold'>
       <p>Emp.Unboarding</p>
       </span>
    </div>
    <div className='w-3/4 flex h-full justify-end gap-6 items-center'>
      <PersonIcon className='cursor-pointer'/>
      <button className='px-8 py-3 rounded-md text-white hover:animate-pulse bg-sky-600 text '><SmartphoneIcon/>LOGIN</button>
    </div>
   </nav>

  )
}
