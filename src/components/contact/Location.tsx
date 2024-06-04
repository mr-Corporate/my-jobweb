import React from 'react'

export default function Location() {
  return (
    <>
    <div className=' h-[80vh] main-container mt-10 flex flex-col'>
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14972.
      207677384158!2d85.7858751!3d20.2566814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1
      s0x3a19a77942c6a6d5%3A0x60da1951917b3256!2sMyjob%20Services%20Pvt.%20Ltd.
      !5e0!3m2!1sen!2sin!4v1717397220331!5m2!1sen!2sin"
     width="100%"
     height="100%"
     allowFullScreen={true}
    loading="lazy" 
     referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
     <div className='main-container mt-10 mb-10'>
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
