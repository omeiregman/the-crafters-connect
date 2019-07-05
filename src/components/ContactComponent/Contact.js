import React from 'react';
import './Contact.css';
import image from './image/contact.jpg';
const Contact=() =>{
    return (
            <div className='container contain'>
                <div className='row'>
                  <h2 className='h2 contact-head'>CONTACT US</h2>
                </div>
                <div className='row'>
                    <div className='col-md-6 large-col'>
                       <img style={{width:'100%',marginTop:'20px'}} src={image} alt='Contact Image'/>
                    </div>
                    <div className='col-md-5 small-col'>
                        <div className='row smallcolrow'>
                            <div className='col-md-12 col1-row2 contacth'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                      <p><i className="far fa-address-card icon1"></i></p>
                                    </div>
                                    <div className='col-md-8'>
                                     <p className='paragraph'>NEED 24/7 SUPPORT</p>
                                     <p>
                                      <button className='btn btn-support'>CONTACT SUPPORT</button>
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                        <div className='col-md-12 col2-row2'>
                                 <div className='row'>
                                   <ul className='ulist'>
                                       <li>
                                          <span>
                                          <i class="fab fa-whatsapp icontact"></i>
                                              <span className='contacttext'>
                                                  <b>WHATSAPP</b> <p className='breaks'> +23470948897524</p>
                                              </span>
                                          </span>
                                       </li>
                                       <li>
                                       <span>
                                              <i className="far fa-envelope-open icontact"></i>
                                              <span className='contacttext'>
                                                  <b>Email</b> <p className='breaks'> thecraftersconnect@gmail.com</p>
                                              </span>
                                          </span>
                                       </li>
                                       <li>
                                       <span>
                                             <i class="fab fa-instagram icontact"></i>
                                             <span className='contacttext'>
                                             <b>INSTAGRAM</b> <p className='breaks'>@thecraftersconnect</p>
                                                 
                                              </span>
                                          </span>
                                       </li>
                                       <li>
                                       <span>
                                       <i class="fab fa-facebook icontact"></i>
                                            <span className='contacttext'>
                                              <b>FACEBOOK</b> <p className='breaks'> The Crafters Connect</p>
                                            </span>
                                          </span>
                                       </li>
                                   </ul>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Contact