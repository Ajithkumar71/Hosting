import React from 'react'
import './home.css';
import img1 from '../../images/slider-img.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Dis_content_M = () => {
    return (
        <section className='slider_section'>

            <div className='container'>
                <div className='row  d-flex justify-content-around'>
                    <div className='col-md-6'>

                        <div className='card-body'>
                            <div className='card-text '>
                                <div className=' detail-box'>
                                    <h1>Fast & Secure
                                        <br />Web Hosting
                                    </h1>
                                    <p>Anything embarrassing hidden in the middle of text. All the Lorem Ipsuanything embarrassing hidden in the middle of text. All the Lorem Ipsumm </p>
                                    <button type='button' className='btn  btn-primary btn-lg'>Read More</button> &nbsp;
                                    <button type='button' className='btn  btn-danger btn-lg'>Contact&nbsp;Us</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='col-md-4'>
                        <div className='card-body'>
                            <div className='card-text'>
                                <div className='img-box'>
                                    <img className='d-block w-100' src={img1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )

}

export default Dis_content_M;