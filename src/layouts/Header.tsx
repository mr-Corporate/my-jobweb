import React from 'react'
// import { main_logo } from '../assets/navbar'
import PersonIcon from '@mui/icons-material/Person';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { main_pic } from '../assets/navbar';
import { useRouter } from 'next/router';
export default function Header() {
    const router = useRouter()

  return (
    <>
   <nav className='w-full flex items-center justify-between h-18 main-container  mb-32 border-bottom sticky top-0 bg-slate-50'>
    <div className='w-3/4 h-full'>
      <img src={main_pic.src} alt=""/>
    </div>
    <div className='w-full h-full flex justify-between items-center'>
      <span className='w-fit h-full text-teal-600 cursor-pointer flex items-center justify-center p-2 font-bold' onClick={()=>{router.push("/")}}>
      <p className=''>Home</p>
      </span>
      <span className='w-fit h-full text-teal-600 cursor-pointer flex items-center justify-center p-2 font-bold' onClick={()=>{router.push("/about")}}>
      <p className=''>About</p>
      </span>
      <span className='w-fit h-full text-teal-600 cursor-pointer flex items-center justify-center p-2 font-bold' onClick={()=>{router.push("/employer")}}>
      <p>Employer</p>
      </span>
      <span className='w-fit h-full text-teal-600 cursor-pointer flex items-center justify-center p-2 font-bold text-nowrap' onClick={()=>{router.push("/jobseeker")}}>
      <p>Job Seeeker</p>
      </span>
      <span className='w-fit h-full text-teal-600 cursor-pointer flex items-center justify-center p-2 font-bold' onClick={()=>{router.push("/blog")}}> 
      <p>Blog</p>
      </span>
      <span className='w-fit h-full text-teal-600 cursor-pointer flex items-center justify-center p-2 font-bold'onClick={()=>{router.push("/contact")}}> 
      <p>Contact</p>
      </span>
      <span className='w-fit h-full text-teal-600 cursor-pointer flex items-center justify-center p-2 font-bold'onClick={()=>{router.push("/404")}} >
       <p>Emp.Unboarding</p>
       </span>
    </div>
    <div className='w-3/4 flex h-full justify-end gap-6 items-center'>
      <PersonIcon className='cursor-pointer'/>
      <button className='px-8 py-3 rounded-md text-white hover:animate-pulse bg-sky-600 text '><SmartphoneIcon/>LOGIN</button>
    </div>
   </nav>
   </>
  )
}
