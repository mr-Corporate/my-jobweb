import React from 'react'
import Breadcrumb from '../components/about/Breadcrumb'
import Mainlayout from '../layouts/Mainlayout'
import Member from '../components/about/Member'
import Search from '../components/employer/Search'
export default function about() {
  return (
    <Mainlayout>
      <Breadcrumb/>
      <Member/>
      <Search/>
    </Mainlayout>
    
  )
}
