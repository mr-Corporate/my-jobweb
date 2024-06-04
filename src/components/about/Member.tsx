import React from 'react'
import { member1_img } from '@/src/assets/about/aboutcompany' 
import { member2_img } from '@/src/assets/about/aboutcompany'
import { member3_img } from '@/src/assets/about/aboutcompany'
import { member4_img } from '@/src/assets/about/aboutcompany'


export default function Member() {
  return (
    <>
    <div className='bg-slate-300 h-full  mt-40 main-container'>
       <div className=" flex flex-col items-center justify-between mt-40 ">
        <button className='bg-slate-200 px-2 py-3 flex font-bold text-blue-800 rounded-md bg-center mt-4 '>Expert Team Member</button>
        <p className='font-extrabold text-5xl text-wrap text-center font-serif mt-4'>Meet Our Experience Team Member Which Complete Projects</p>
        </div>
        <div className='flex justify-between'>
        <p className='font-bold text-2xl text-center font-serif m-4'><img src={ member1_img.src }alt=''/>Suresh Mishra<br/>MD </p>
        {/* <p className='font-bold text-2xl text-center font-serif m-4'><img src={member2_img.src }alt=''/>Nihar Ranjan Rout <br/>CTO</p> */}
        <p className='font-bold text-2xl text-center font-serif m-4'><img src={member3_img.src }alt=''/>Rabi Sathpathy<br/>Chief Advisor</p>
        <p className='font-bold text-2xl text-center font-serif m-4'><img src={member4_img.src }alt=''/>Satyabrata Samal<br/>GM</p>
        </div>
      
    </div>
    </>
  )
}
