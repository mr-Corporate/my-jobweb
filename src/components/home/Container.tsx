import React from 'react'
import Diversity1Icon from '@mui/icons-material/Diversity1';
import HandshakeIcon from '@mui/icons-material/Handshake';
import InsightsIcon from '@mui/icons-material/Insights';
export default function Container() {
  return (
    <>
    <div className='container  mx-auto  bg-blue-600  h-80 w-3/4 justify-evenly flex text-white  mb-11'>
        <div className=' flex flex-col justify-center p-5 w-1/3   border-r'>
            <Diversity1Icon className='size-28'/>
            <p className='font-extrabold text-4xl '>120+</p>
            <p className='font-bold'>Placed in Last 15 days</p>
        </div>
        <div className=' flex flex-col justify-center p-5 w-1/3'>
            <HandshakeIcon  className='size-28'/>
            <p className='font-extrabold text-4xl '>50+</p>
            <p className='font-bold'>Partner Companies</p>
        </div>
        <div className=' flex flex-col justify-center p-5 w-1/3  border-l'>
            <InsightsIcon className='size-28'/>
            <p className='font-extrabold text-4xl '>250+</p>
            <p className='font-bold'>Job Openings</p>
        </div>
    </div>
    </>
  )
}
