import React from 'react'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { hero_img } from '@/src/assets/Home';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

export default function Breadcrumb() {
  return (
    <section className='main-container flex'>
      <div>
      <button className="bg-slate-200   font-bold py-2 px-4 text-cyan-800 border-blue-700 rounded mb-5">
  MYJOB
</button>
      <h1 className='text-5xl font-bold flex mb-7'>FIND THE RIGHT JOB FOR <br/>YOUR CAREER</h1>
      <p className='text-zinc-500 text-2xl mb-11'>Myjob is one of the highest rated employee-oriented <br/>
      recruitment company in the India with a very simple aim to <br/>connect right talent to the right company.</p>
      <p className='font-bold text-zinc-500 mb-5'><CheckCircleOutlineRoundedIcon/>100 % FREE Registration</p>
      <p className='font-bold text-zinc-500 mb-5'><CheckCircleOutlineRoundedIcon/>Free and Verified Jobs</p>
      <div className='flex gap-4'>
      <button className="bg-blue-800 hover:bg-white hover:text-blue-800 transition delay-150 duration-300 ease-in-out
       text-white font-bold py-4 px-6  border-blue-700 rounded flex justify-start mb-60">
  Download<PhoneIphoneRoundedIcon/></button>
<button className=" hover:bg-blue-800 hover:text-white transition delay-150 duration-300 ease-in-out
 text-blue-950 font-bold py-4 px-6  border-blue-500 rounded flex justify-start mb-60">
  Support<ArrowForwardRoundedIcon/></button>
      </div>
      <div className=" flex items-center  mb-12  ">
        <button className='bg-slate-200 px-2 py-3 font-bold text-cyan-700 rounded'>Our Services</button>
      </div>
      <h1 className="text-5xl mb-20 font-bold ">A ONE-STOP solution for all your requirement needs</h1> 

      

      </div> 
      <div>
      <img src={hero_img.src} alt=""/>
      </div>
     
    </section>
  )
}
