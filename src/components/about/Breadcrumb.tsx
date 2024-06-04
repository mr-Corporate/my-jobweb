import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { circle_img } from '@/src/assets/about';
import about from '@/src/pages/about';
import { page1_img, page_img } from '@/src/assets/about/aboutcompany';

about
circle_img
export default function Breadcrumb() {
  return (
    <>
    <div className='bg-blue-600 h-80  flex-col text-start  text-white px-10 py-28 bg-no-repeat bg-right mb-28 ' 
    style={{backgroundImage :`  url(${circle_img.src })`}}>
      <p className='font-extrabold text-5xl font-serif m-2'> About Us</p>
      <p className='font-semibold m-2 ' >Home<ArrowForwardIosIcon/> About Us</p>    
    </div>

    < div className=' grid grid-cols-3 gap-5 justify-between main-container '>
  
        
        
          <div >
          <button className='bg-gray-200  font-semibold  font-sans text-sky-900 px-2 py-3 rounded mt-6'>About Company</button>
            <p className='font-extrabold text-5xl font-serif '>We aim to provide the best candidate with 
            the best of what they deserve for their career and success.</p>
            <p className='text-slate-600  text-1xl leading-loose mt-7' >MyJob is India’s one of the best workforce solution companies, established in the year 2012.
               With a crystal clear aim to provide the “right candidate to the right company and the right company 
               to the right candidate” in a seamless way. We work on all industry scales and hence we bridge the gap 
               between the candidates and the companies. My Job takes the charge of any candidate not being left behind.
                The raw talents are polished, made industry-ready, and then presented in their best forms to the industries.
                 We love to bring out the hidden potential of our candidates. MyJob has been providing
               workforce solutions to the industries for years now. The best is promised and so is provided.</p>
          
          </div>
          <div>
          <img src = {page_img.src} alt="" />
          </div>
          <div>
          <img src = {page1_img.src} alt="" />
          </div>
       
        </div>
    </>
  )
}