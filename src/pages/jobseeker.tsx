import React from 'react'
import Mainlayout from '../layouts/Mainlayout'
import Candidates from '../components/jobseeker/Candidates'
import Services from '../components/jobseeker/Services'
export default function Jobseeker() {
  return (
    <Mainlayout>
  <Candidates/>
    <Services/>
    </Mainlayout>
  )
}
