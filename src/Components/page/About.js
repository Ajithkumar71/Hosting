import React from 'react'
import './home.css';

import img8 from '../../images/about-img.png';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const About_M = () => {
    return (
        <>
            <section>
                <div className='container ab-box '>
                    <div className='row'>
                        <div className='col-md-6 mt-5'>
                            <div className='about-box  '>
                                <h2>About Us</h2>
                                <p className='ab-txt'>Words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks</p>
                                <button type='buttton' className='btn btn-danger' > Read More</button>

                            </div>
                        </div>

                        <div className='col-md-6 pb-5'>
                            <img className='pic-box' src={img8} alt="" />
                        </div>

                    </div>
                </div>
            </section>

           
        </>
    )
}



export default About_M ;