import React from 'react'
import './home.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Touch_M = () => {

    return (
        <>
            <section className='touch-field'>
                <div className='touch-title text-center'> <h2>Get In The Touch</h2></div>
                <header className='container  '>
                    <section className='row'>
                        <div className='col-md-12 d-flex justify-content-center'>
                            <div className='form-group'>
                                <form action="#" method='POST'>
                                    <input className='form-control' type="text" placeholder='Your Name' required pattern="^[\p{L}\p{M} \-\.',]*$" /><br />
                                    <input className='form-control' type="text" placeholder='Your Email' pattern="^[a-zA-Z0-9ñÑ.!#$%&amp;'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$" required /><br />
                                    <input className='form-control' type="text" placeholder='Your Phone Number' pattern="[0-9]{3}[0-9]{4}[0-9]{3}" required /><br />
                                    <textarea className='form-control'  cols="30" rows="10" placeholder='Message'></textarea><br /><br />
                               
                                <div className='touch-button text-center '><button type='submit' className=' btn  btn-danger  '>Send</button><br /></div>
                                </form>
                            </div>


                        </div>
                    </section>
                </header>
            </section>

        </>
    )
}

export default Touch_M;