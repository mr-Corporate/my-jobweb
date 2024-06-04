import React from 'react'
import { jobseeker_img } from '@/src/assets/about/aboutcompany'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export default function Services() {
  return (
    <>
    <div className='flex  justify-between main-container' >
     <div > <img src={jobseeker_img.src} alt=''/></div> 
      
      <div className='justify-between place-items-end'>
      <button className='bg-slate-400 px-2 py-3 font-semibold from-neutral-50 font-sans rounded '>What we Provide</button>
        
        <p className='leading-loose text-1xl font-sans from-neutral-100 font-semibold mb-10'>
            MyJob- A new-aged platform for the job aspirants looking for a<br/> 
            bright future with opportunities on their way to growth. A forum<br/>
             made with love, passion and technology, fulfilling the dreams of<br/>
              many by providing the jobs they are hunting for. The application<br/>
               built ensures the seamless communication between the right company<br/>
                and the right candidate. MyJob bridges the gap between the perfect<br/>
                 fit and the aspirant, we groom the candidate with the required <br/>
                 mentorship and guidance for grasping the opportunity desired.<br/>
                  The search ends here, and the era of opportunities begins!</p>
                  <p className='font-extrabold mb-5 font-sans from-neutral-400 '> <CheckCircleOutlineIcon />Download the MyJob application from the Playstore or Appstore.</p>
           <p className='font-extrabold mb-5 font-sans from-neutral-400 '> <CheckCircleOutlineIcon />Register the company with the basic details.</p>
           <p className='font-extrabold mb-5 font-sans from-neutral-400 '> <CheckCircleOutlineIcon />Get the job recommendations on the application.</p>
           <p className='font-extrabold mb-5 font-sans from-neutral-400 '> <CheckCircleOutlineIcon />Wait for our TA team to assist you with the best opportunities.</p>
           <p className='font-extrabold mb-5 font-sans from-neutral-400 '> <CheckCircleOutlineIcon />Get guidance in the places you lack!</p>
           <p className='font-extrabold mb-5 font-sans from-neutral-400 '> <CheckCircleOutlineIcon />Face the interviews.</p>
           <p className='font-extrabold mb-5 font-sans from-neutral-400 '> <CheckCircleOutlineIcon />Get the job!</p>
           <button className="bg-blue-700   font-bold py-2 px-4 text-white rounded mt-20">Get Started</button>
      </div>
      
    </div>
     <div className='main-container mb-10 mt-10'>
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
