import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { recruiter_img } from '@/src/assets/about/aboutcompany';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export default function Services() {
  return (
   <>
   <div className='bg-blue-700 h-72 flex  items-center text-white  p-6 '>
   <div className='flex flex-col '>
    <p className='font-serif font-extrabold text-5xl m-2 '>Recruiters</p>
    <p  className='font-bold text-2xl '> Home <ArrowForwardIosIcon/> Employer</p>
    </div> 
   
    </div>
  <div className='flex justify-between mt-24 main-container'>
  <div>
      <img src ={recruiter_img.src} alt=""></img>
      </div>
    <div className=' justify-between place-items-end '>
      <button className="bg-slate-300   font-bold py-2 px-4 text-cyan-800 border-blue-700 rounded mb-5">What We Provide</button>
      <p className='leading-loose text-1xl font-sans from-neutral-100 font-semibold mb-10'>Every company requires exceptional talent to boost their growth<br/>and success.
         MyJob helps companies in fulfilling their<br/> requirements.
          We understand that it is tough to find the right fit<br/>that visualises your vision, 
          and we take the challenge to help you<br/> with the best!
           We place the right candidate in the right position at<br/> the right time!</p> 
           <p className='font-extrabold mb-5 font-sans from-neutral-400 '> <CheckCircleOutlineIcon />Download the MyJob application from the Playstore or Appstore.</p>
           <p className='font-extrabold mb-5 font-sans from-neutral-400 '> <CheckCircleOutlineIcon />Register the company with the basic details.</p>
           <p className='font-extrabold mb-5 font-sans from-neutral-400 '> <CheckCircleOutlineIcon />Complete the KYC.</p>
           <p className='font-extrabold mb-5 font-sans from-neutral-400 '> <CheckCircleOutlineIcon />Wait for the verification.</p>
           <p className='font-extrabold mb-5 font-sans from-neutral-400 '> <CheckCircleOutlineIcon />Post the employee requirements on the application.</p>
           <p className='font-extrabold mb-5 font-sans from-neutral-400 '> <CheckCircleOutlineIcon />Get assistance from us and hire the best!</p>
           <button className="bg-blue-700   font-bold py-2 px-4 text-white rounded mt-20">Get Started</button>
   </div>
 </div>
 </>
  )
}
