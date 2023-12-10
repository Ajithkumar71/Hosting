import React from 'react'
import './home.css';
import { IoMailOpenOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Footer_M = () => {
    const today = new Date();
    return (
        <>
            <footer id='foot'>
                <header className='footer-section container'>
                    <section className='row'>

                        <div className='col-md-3 card-body foot-adds'>
                            <h2>  Address</h2>
                            <p> <FaLocationDot />&nbsp;&nbsp;Location</p>
                            <p>  <i className="fa fa-phone " aria-hidden="true">&nbsp;&nbsp;
                                <span className='caller'>Call : +01 123455678990</span>
                            </i></p>
                            <p> <IoMailOpenOutline />&nbsp;&nbsp; mail@domain.com</p>
                        </div>

                        <div className='col-md-3 card-body'>
                            <h2 className='foot-link'>Links</h2>
                            <ul className='foot'>
                                <li className="nav-item"><Link to='/' >HOME</Link></li>
                                <li className="nav-item"><Link to='/about' >ABOUT</Link></li>
                                <li className="nav-item"><Link to='/services' >SERVICES</Link></li>
                                <li className="nav-item"><Link to='/pricing' >PRICING</Link></li>
                                <li className="nav-item"><Link to='/contact' >CONTACT&nbsp;US</Link></li>
                            </ul>

                        </div>

                        <div className='col-md-3 card-body foot-info'>
                            <h2>Info</h2>
                            <p>necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
                        </div>

                        <div className='col-md-3 card-body foot-sub'>
                            <form action="data.php" method='post' className='' >
                            <h2>Subcribe</h2>
                                <input className='' type="text" pattern="^[a-zA-Z0-9ñÑ.!#$%&amp;'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$" placeholder='Enter Mial' required /><br /><br />
                                <button className='btn btn-danger' type='sunmit'>Subcribe</button></form>
                        </div>




                    </section>
                </header>


                <div className='hor' >< hr size="10" /></div>

                <div className='creater text-center'>
                    &copy; {today.getFullYear()} Designed by AjithKumar
                </div>
            </footer>



        </>
    )
}


export default Footer_M;