import React from 'react'
import './home.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import img2 from '../../images/s1.png';
import img3 from '../../images/s2.png';
import img4 from '../../images/s3.png';
import img5 from '../../images/s4.png';
import img6 from '../../images/s5.png';
import img7 from '../../images/s6.png';


const Services_M = () => {
    return (
        <section className='services '>
            <h3 className='text-center'>Our Service</h3>
            <div className='container'>
                <div className=' d-flex justify-content-around '>
                    <div className='row '>


                        <div className='Ser-con col-md-4'>
                            <div className='sb border text-center '>
                                <img className="card-img-top  mt-3 rounded-circle " src={img2} alt="" />
                                <div className='card-body'>
                                    <h3 className='card-title'>
                                        Shared Hosting
                                    </h3>
                                    <p className='card-text'>Generators on the Internet tend to repeat predefined chunks as necessary</p>
                                    <a className='#' href="#">Read More</a> <br /><br />
                                </div>
                            </div>
                        </div>

                        <div className='Ser-con col-md-4'>
                            <div className='sb border text-center '>
                                <img className="card-img-top rounded-circle k mt-3" src={img3} alt="" />
                                <div className='card-body'>
                                    <div className='card-title'>
                                        <h3 className='card-title'>Dedicated Hosting</h3>
                                        <p className='card-text '>Generators on the Internet tend to repeat predefined chunks as necessary</p>
                                        <a href="#">Read More</a><br /><br />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='Ser-con col-md-4'>
                            <div className='sb border text-center '>
                                <img className="card-img-top rounded-circle  mt-3" src={img4} alt="" />
                                <div className='card-body'>
                                    <div className='card-title'>
                                        <h3 className='card-title'>Cloud Hosting</h3>
                                        <p className='card-text'>Generators on the Internet tend to repeat predefined chunks as necessary</p>
                                        <a href="#">Read More</a><br /><br />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <br />

            <div className='container'>
                <div className='   '>
                    <div className='  row ' >

                        <div className='Ser-con col-md-4'>
                            <div className='sb border text-center '>
                                <img className="card-img-top rounded-circle mt-3" src={img5} alt="" />
                                <div className='card-body'>
                                    <div className='card-title'>
                                        <h3 className='card-title'>VPS Hosting</h3>
                                        <p className='card-text'>Generators on the Internet tend to repeat predefined chunks as necessary</p>
                                        <a href="#">Read More</a><br /><br />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='Ser-con col-md-4 '>
                            <div className='sb border text-center  '>
                                <img className="card-img-top rounded-circle mt-3" src={img6} alt="" />
                                <div className='card-body'>
                                    <div className='card-title'>
                                        <h3 className='card-title'>Wordpress Hosting</h3>
                                        <p className='card-text'>Generators on the Internet tend to repeat predefined chunks as necessary</p>
                                        <a href="#">Read More</a><br /><br />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='Ser-con col-md-4'>
                            <div className='sb border text-center '>
                                <img className="card-img-top rounded-circle mt-3" src={img7} alt="" />
                                <div className='card-body'>
                                    <div className='card-title'>
                                        <h3 className='card-title'>Domain Name</h3>
                                        <p className='card-text'>Generators on the Internet tend to repeat predefined chunks as necessary</p>
                                        <a href="#">Read More</a><br /><br />

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <br /><br /><br />
        </section>
    )
}


export default Services_M;