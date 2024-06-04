import React from 'react'
import { jobhunt_img } from '@/src/assets/about/aboutcompany'
export default function Jobhunts() {
  
  return (
    <>
    <div className='bg-sky-900 h-28  flex items-center '>
      <p className='font-extrabold font-mono text-white text-3xl f px-40'>Myjob Insights</p>
    </div>
    
    <div className='flex flex-col  items-center  main-container'><img src={jobhunt_img.src} alt=""/>
      <p className='font-extrabold font-sans text-4xl '> 10 THINGS TO FOCUS ON DURING YOUR JOB HUNT</p>
    </div>

    </>
  )
}