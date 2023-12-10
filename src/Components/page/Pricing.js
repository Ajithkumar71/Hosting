import React from 'react'
import './home.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Pricing_M = () => {
    return (
        <>
            <section>

                <header className='text-center'>
                    <h2 className='priname'>Pricing</h2>
                </header>

                <div className='container'>
                    <div className=' row '>
                        <div className=' pricing-tag  ' >
                            <div className="cont1  d-md-flex  justify-content-md-around ">

                                <div className="card text-center">

                                    <div className="card-body">
                                        <h5 className="Pricing-title">$49 <br /> STARTUP</h5>
                                        <p className="card-text">2GB Ram <br />
                                            20GB SSD cloud storage <br />
                                            weekly Backups <br />
                                            DDos Protection <br />
                                            Full Root Access <br />
                                            24/7 365 Tech Support
                                        </p>
                                        <div>
                                            <button type='button' className='btn btn-danger'>See Deatils</button>
                                        </div>
                                    </div>
                                </div>


                                <div className="card text-center">
                                    <div className="card-body">
                                        <h5 className="Pricing-title">$99 <br /> STANDARD</h5>
                                        <p className="card-text">4GB Ram <br />
                                            50GB SSD cloud storage <br />
                                            weekly Backups <br />
                                            DDos Protection <br />
                                            Full Root Access <br />
                                            24/7 365 Tech Support
                                        </p>
                                        <div class="">
                                            <button type='button' className='btn btn-danger' >See Deatils</button>
                                        </div>
                                    </div>
                                </div>


                                <div className="card text-center">
                                    <div className="card-body">
                                        <h5 className="Pricing-title">$149 <br /> STARTUP</h5>
                                        <p className="card-text">8GB Ram <br />
                                            100GB SSD cloud storage <br />
                                            weekly Backups <br />
                                            DDos Protection <br />
                                            Full Root Access <br />
                                            24/7 365 Tech Support
                                        </p>
                                        <div >
                                            <button type='button' className='btn btn-danger' >See Deatils</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}


export default Pricing_M ;