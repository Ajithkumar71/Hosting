import React from 'react'
import img9 from '../../images/server-img.jpg';
import './home.css';
const Inter_M = () => {
  return (
   <>
          <section className='server-border'>
              <div className='container '>
                  <div className=' row '>

                      <div className='col-md-6'>
                          <div className='pic-server'>
                              <img src={img9} alt="" />
                          </div>
                      </div>


                      <div className='col-md-6'>
                          <div className='Pic-border'>
                              <h2 className='Pic-border-title'>Let us manage your server</h2>
                              <p>
                                  Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore</p>
                              <a className='btn btn-danger' href="#">Read More</a>
                          </div>

                      </div>

                  </div>
              </div>
          </section>
   </>
  )
}

export default Inter_M;