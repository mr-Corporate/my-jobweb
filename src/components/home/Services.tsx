import { provide_img } from '@/src/assets/Home/services'
import React from 'react'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
export default function Services() {
  return (
    <>
  <div className=' flex justify-between main-container gap-8 ' >
    <div>
    <img src={provide_img.src} alt="provide_img" />
    </div> 
    <div>
       <button className=" bg-slate-200 text-blue-800 px-1 py-3  font-bold  ">What We Provide</button>
        <p className='font-extrabold text-4xl mt-10 '>Prioritizing EmployabilitySince 2012</p>
        <p className='leading-loose  text-slate-500 mt-10'>We are one of India’s leading Workforce solution companies and part of the A.P. Group conglomerate. We have a crystal-clear
         <br/>commitment to provide the “right candidate to the right company<br/> at appropriate time ” and vice-versa through seamless operation.<br/>
          As you may agree, we are a country having tremendous talent but<br/>
           unfortunately, we have a brain-drain-like condition because the <br/>
           right talent doesn’t find the right value, work, and place, <br/>so genuine talents migrate to different countries.</p>
           
           <p className='font-bold  text-slate-600 mt-6'><CheckCircleOutlineRoundedIcon/>Empowering businesses by simplifying recruitment</p>
           <p className='font-bold  text-slate-600 mt-4'><CheckCircleOutlineRoundedIcon/>End to End hiring</p>
           <p className='font-bold text-slate-600 mt-4'><CheckCircleOutlineRoundedIcon/>Top Domain Expertise Recruiters</p>
         </div>
       </div>
       <div className='main-container mt-10 mb-8'>
    <div className='bg-sky-600   rounded  flex  justify-between items-center '>
    <div className=' text-white  items-center mx-'>
      <p className='text-5xl font-bold font-sans  m-3'>Looking for A Job?</p>
      <p className='font-bold m-3 font-sans text-1xl'>Download Our Mobile Application</p>
      
    </div>
    <div className=' m-10'><button className="bg-blue-700   font-bold py-2 px-4 text-white rounded mt-20 ">Get Started</button></div>
    </div>
    </div>
      
    </>
  )
}

