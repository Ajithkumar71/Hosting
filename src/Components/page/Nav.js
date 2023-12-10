import React, { useState } from 'react';

import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import './home.css';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dis_content_M from './Dis_cont';


 

const Home_M = () => {
    const [icon,setIcon]=useState(false)
    const handleclick =()=>{
      setIcon(!icon)
    }
    const closeside =()=>{
      setIcon(false)
    }

  //{click? "naav-mobile" :"naav"}
  return (
    <>
     
        <header className="header">

          <div className="container-fluid">

            <nav className='navbar '>
              <a className="navbar-brand" href="#"><span>Digital&nbsp;Host</span></a>

           
            
            <ul className={icon ? 'naav-mobile' :'naav' }> 

              <li className="nav-item" onClick={closeside}><Link to='/' >HOME</Link></li>
              <li className="nav-item" onClick={closeside}><Link to='/about' >ABOUT</Link></li>
              <li className="nav-item" onClick={closeside}><Link to='/services' >SERVICES</Link></li>
              <li className="nav-item" onClick={closeside}><Link to='/pricing' >PRICING</Link></li>
              <li className="nav-item" onClick={closeside}><Link to='/contact' >CONTACT&nbsp;US</Link></li> 

                <form className="form-inline">
                  <input className="form-control mr-sm-2" type='search' name="search" placeholder="Search" />
                </form>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className='icon' href="#">
                  <i className="fa fa-phone fa-lg" aria-hidden="true">&nbsp;&nbsp;
                    <span className='caller'>Call : +01 123455678990</span>
                  </i>
                </a>

              </ul>

              {/* <button className='bar-icon'  >
                <FaBars />
              </button> */}

            <div className='bar-icon' onClick={handleclick}>
              {icon ? <IoMdClose className='icon-close' /> : <FaBars className='icon-bars' />}
            </div>

            </nav>





          </div>
        </header>
        

          
      

    </>
  )
}



export default Home_M;
