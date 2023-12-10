import React from 'react'


import Home_M from '../page/Nav';
import Dis_content_M from '../page/Dis_cont';
import Services_M from '../page/Service';
import About_M from '../page/About'
import Inter_M from '../page/Inter'
import Pricing_M from '../page/Pricing'; 
import Touch_M from '../page/Contact'
import Footer_M from '../page/Footer'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Homepages() {
  return (
    <>
    <Home_M/>
    <Dis_content_M />
    < Services_M />
    <About_M />
    <Inter_M />
    <Pricing_M />
    <Touch_M />
    <Footer_M /> 
    </>
  )
}


function Aboutpage(){
  return (
    <>
    <Home_M/>
    <Dis_content_M />
    <About_M />
    <Footer_M /> 
    </>
  )

}

function Servpage(){
  return (
    <>
    <Home_M/>
    < Services_M />
    <Footer_M /> 
    </>
  )

}

function Pricpage(){
  return (
    <>
    <Home_M/>
    {/* <Dis_content_M /> */}
    
    <Pricing_M />
    <Footer_M /> 
    </>
  )

}

function Contpage(){
  return (
    <>
    <Home_M/>
    <Touch_M />
    <Footer_M /> 
    </>
  )
}

const Paths=()=>{
  return(
    <>
    <Router>
    <Routes>
      <Route path='/' element={< Homepages/>} />
       <Route path='/about' element={< Aboutpage />} />
        <Route path='/services' element={< Servpage/>} />
         <Route path='/pricing' element={< Pricpage/>} />
          <Route path='/contact' element={< Contpage/>} />
    </Routes>
    </Router>
    </>
  )
}

export default  Paths;