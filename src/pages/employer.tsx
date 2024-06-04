import React from 'react'
import Mainlayout from '../layouts/Mainlayout'
import Services from '../components/employer/Services'
import Search from '../components/employer/Search'
export default function Employer() {
  return (
  <>
       <Mainlayout>
      <Services/>
      <Search/>
    </Mainlayout>
    </>
    
  )
}
