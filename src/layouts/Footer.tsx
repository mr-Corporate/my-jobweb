import React from 'react'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DraftsIcon from '@mui/icons-material/Drafts';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { main_pic } from '../assets/navbar';
export default function Footer() {
  return (
    <footer className='h-60 w-full items-center justify-between  main-container grid grid-cols-4'>
      <div className='w-full h-full'>
      <img src={main_pic.src} alt="" />
      <h1 className='underline decoration-sky-600 text-sky-600 flex flex-col text-2xl mb-3'>Address</h1>
      <p className='text-zinc-500'>First Floor, Plot No: 15/2381, <br/>
        Near KTM Bike Showroom <br/>Bhubaneswar, 
        Odisha 751030</p>
        <button className=''>Read more <ArrowRightAltIcon/> </button>
        </div> 
      <div className='flex flex-col w-full gap-3'>
        <h1 className='font-bold text-2xl mb-3'>Resources</h1>
        <div className='flex-col w-full h-full text-zinc-500'>
        <p>Privacy</p>
        <p>Blogs</p>
        <p>Terms</p>
        <p>Refund</p>
        <p>Support</p>
        </div>
      </div>
      <div className='flex flex-col w-full gap-3'>
        <h1 className='font-bold text-2xl mb-3'>Company</h1>
        <div className='flex-col w-full h-full gap-3 text-zinc-500 '>
        <p>About MyJob</p>
        <p>Privacy Policy</p>
        <p>Hire Candidate</p>
        <p>Career</p>
        <p>Blogs</p>
        </div>
      </div>
      
      <div className='flex flex-col w-full gap-3 '>
        <h1 className='font-bold text-2xl mb-3'>Get In Touch</h1>
        <p><DraftsIcon/> info@myjob.net.in</p>
        <p><PhoneEnabledIcon/> Call : 18008890094</p>
        <p className='flex gap-5 cursor-pointer'><FacebookRoundedIcon/> <InstagramIcon/> <TwitterIcon/> <LinkedInIcon/></p>
        <div className='flex-col w-full h-full '>
        
        </div>
      </div>

    </footer>
  )  
}
