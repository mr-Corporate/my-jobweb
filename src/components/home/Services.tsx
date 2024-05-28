import { provide_img } from '@/src/assets/Home/services'
import React from 'react'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
export default function Services() {
  return (
    <>
  <div className='flex w-full mb-10' >
    <img src={provide_img.src} alt="provide_img" width={"50%"}/>
    <div className='flex-col justify-between items-start w-1/2' > 
        <p className=" bg-slate-200 text-blue-800 h-10 w-1/3 flex items-center justify-center mb-12 font-bold  rounded-md text-center">What We Provide</p>
        <p className='font-extrabold text-4xl mb-10 '>Prioritizing Employability<br/> Since 2012</p>
        <p className='leading-loose mb-7 text-slate-500'>We are one of India’s leading Workforce solution companies and<br/> part of the A.P. Group conglomerate. We have a crystal-clear
         <br/>commitment to provide the “right candidate to the right company<br/> at appropriate time ” and vice-versa through seamless operation.<br/>
          As you may agree, we are a country having tremendous talent but<br/>
           unfortunately, we have a brain-drain-like condition because the <br/>
           right talent doesn’t find the right value, work, and place, <br/>so genuine talents migrate to different countries.</p>

           <p className='font-bold mb-4 text-slate-600'><CheckCircleOutlineRoundedIcon/>Empowering businesses by simplifying recruitment</p>
           <p className='font-bold mb-4 text-slate-600'><CheckCircleOutlineRoundedIcon/>End to End hiring</p>
           <p className='font-bold text-slate-600'><CheckCircleOutlineRoundedIcon/>Top Domain Expertise Recruiters</p>

      </div>
   
    </div>
    <div  className='flex '>
       <div className='main-container flex  mx-auto  bg-blue-600  h-52 w-full   text-white py-6 px-10 '>
      
      <div className='w-full flex-col'>
        <p className='font-bold text-4xl px-11 '>Looking For a JOB?</p>
        <p className='  px-11 '>Download Our Mobile Application</p>

      </div>
        <div className='w-full center'>
        <button className=" hover:bg-blue-800 hover:text-white transition delay-150 duration-300 ease-in-out
 text-blue-950 font-bold py-4 px-6  border-blue-500 rounded flex ">
  Support<ArrowForwardRoundedIcon/></button>

        </div>
      </div>
       
       </div>
      
    </>
  )
}

