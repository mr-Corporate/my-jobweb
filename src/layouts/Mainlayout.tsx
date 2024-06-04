import React, { ReactElement } from 'react'
import Header from "./Header";
import Footer from "./Footer";
type prop = {
    title?: string;
    children : ReactElement | ReactElement[];
};
export default function Mainlayout({children}:prop) {
  return (  
    <>
      <Header/>
     <> {children}</>
      <Footer/>
    </>
  )
}
