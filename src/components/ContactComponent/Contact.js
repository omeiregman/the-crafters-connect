import React from 'react';
import './Contact.css';

const Contact=() =>{
    return (
            <div className='container contain'>
                <div className='row'>
                  <h2 className='h2 contact-head'>CONTACT US</h2>
                </div>
                <div className='row'>
                    <div className='col-md-6 large-col'>
                       
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
                                              <i className="fas fa-phone-volume icontact"></i>
                                              <span className='contacttext'>
                                                  <b>CALL SALES NOW</b> <p className='breaks'> +23470948897524</p>
                                              </span>
                                          </span>
                                       </li>
                                       <li>
                                       <span>
                                             <i className="far fa-clock icontact"></i>
                                             <span className='contacttext'>
                                             <b>CALL Hours</b> <p className='breaks'> 8:00AM - 5:00Pm,<br/> Mondays to Saturdays</p>
                                                 
                                              </span>
                                          </span>
                                       </li>
                                       <li>
                                       <span>
                                            <i className="far fa-address-card icontact"></i>
                                            <span className='contacttext'>
                                              <b>OFFICE ADDRESS</b> <p className='breaks'> 7 Olawaele Street <br/> Banana island Lagos</p>
                                            </span>
                                          </span>
                                       </li>
                                       <li>
                                       <span>
                                              <i className="far fa-envelope-open icontact"></i>
                                              <span className='contacttext'>
                                                  <b>CALL SALES NOW</b> <p className='breaks'> +23470948897524</p>
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