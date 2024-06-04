import React from 'react'
import Mainlayout from '../layouts/Mainlayout'
import Contactus from '../components/contact/contactus'
import Address from '../components/contact/Address'
import Location from '../components/contact/Location'
export default function contact() {
  return (
    <>
   <Mainlayout>
    <Contactus/>
    <Address/>
    <Location/>
   </Mainlayout>
   </>
  )
}
