import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';
import { getCrafterFromHandle,getAllCrafters} from './../../actions/crafterActions';
import { PulseLoader } from 'react-spinners';

import CrafterHeader from './CrafterHeader';
import './css/crafterProfile.css';
import profileImage from './img/profileimage.png';
import imgGalleryOne from './img/gallery-one.jpg';
import imgGalleryTwo from './img/gallery-two.jpg';
import imgGalleryThree from './img/gallery-three.jpg';
import imgGalleryFour from './img/gallery-four.jpeg';
import isEmpty from '../../validation/is-empty';

class CraftersProfileLink extends Component {

    constructor(props) {
        super(props);

        this.state = {
            crafterDatail:{}
        }
    }

    componentDidMount() {

        const crafterUrl = this.props.match.params.handle;
        if (this.props.match.params.handle) {
            this.props.getCrafterFromHandle(crafterUrl);
           this.props.getAllCrafters();
        }
        this.setState({
            crafterDetail: this.props.singleCrafter
        });
    }


    render() {
        const { loading,singleCrafter,allCrafter } = this.props;
        console.log(this.props)
        let style={
            color:"#762C14"
        } 
       let relatedCrafters;
       console.log("ok...",allCrafter.allCrafters)
       if(!isEmpty(allCrafter.allCrafters)){
        relatedCrafters=allCrafter.allCrafters.slice(0,12).map(profile=><div key={profile.id} className="row">
            <div style={{color:"#A97C6C"}} className="col-md-12">
                <div style={{margin:"15px 0px 15px 5px"}} className="row">
                    <div style={{marginRight:"-27px"}} className="col-md-4">
                       <img  className="profile-image" src={profileImage} alt="profile" />
                    </div>
                    <div className="col-md-8">
                        {!isEmpty(profile.user)?<p style={{margin:"0px"}}><a style={style} href={`/crafter/${profile.handle}`}>{profile.user.name}</a></p>:"Loading..."}
                        <small>{profile.status}</small>
                    </div>                 
                </div>
            </div>
            </div>
          )
       }

        return(
            <section className="crafter-profile-page">
                <CrafterHeader />
                {loading && 
                <div className="loader">
                  <span>
                    <PulseLoader
                    color={'#EA5800'}
                    loading={loading}
                    />
                  </span>
                  <p>Loading Crafters</p>
              </div>}

              
                {(!loading) &&
                        <section className="container">
                            <div>
                                <Link to="/craftersandcrafts">Back</Link>
                            </div>
                    <section className="row">
                        <section className="col-md-8">
                            <section>
                                <div className="row profile-info crafter-basic-info">
                                    <div className="col-sm-4">
                                        <img className="profile-image" src={profileImage} alt="profile" />
                                    </div>
                                    <div className=" col-sm-8">
                                         <h2 style={{marginBottom:"0px"}}>{!(isEmpty(singleCrafter.user))?singleCrafter.user.name:"loading..."}</h2>
                                          
                                      <small>{singleCrafter.status}</small> 

                                        <h2 style={{marginLeft:"0px"}} className="location"><i className="fas fa-map-marker-alt"></i>{singleCrafter.location}</h2>
                                        <br/>
                                        <div className="row">
                                            <div className="col-sm-6">
                                            { 
                                         !isEmpty(singleCrafter.desktop)? 
                                          ( !isEmpty(singleCrafter.social.desktop)?
                                             <p>
                                               <i className="fab fa-desktop"></i>
                                               <a style={style} target="blank" href={`https://${singleCrafter.social.desktop}`}>&nbsp; desktop</a>  
                                             </p>
                                              :"")
                                           : ""
                                         }
                                         { 
                                         !isEmpty(singleCrafter.social)? 
                                          ( !isEmpty(singleCrafter.social.twitter)?
                                             <p>
                                               <i className="fab fa-twitter"></i>
                                               <a style={style} target="blank" href={`https://${singleCrafter.social.twitter}`}>&nbsp;twitter</a>  
                                             </p>
                                              :"")
                                           : ""
                                         }
                                        { 
                                         !isEmpty(singleCrafter.social)? 
                                          ( !isEmpty(singleCrafter.social.instagram)?
                                             <p>
                                               <i className="fab fa-instagram"></i>
                                               <a style={style} target="blank" href={`https://${singleCrafter.social.instagram}`}>&nbsp;instagram</a>  
                                             </p>
                                              :"")
                                           : ""
                                         }
                                            </div>
                                            <div className="col-sm-6">
                                            { 
                                         !isEmpty(singleCrafter.social)? 
                                          ( !isEmpty(singleCrafter.social.facebook)?
                                             <p>
                                               <i className="fab fa-facebook"></i>
                                               <a style={style} target="blank" href={`https://${singleCrafter.social.facebook}`}>&nbsp;facebook</a>  
                                             </p>
                                              :"")
                                           : ""
                                         }
                                            { 
                                         !isEmpty(singleCrafter.social)? 
                                          ( !isEmpty(singleCrafter.social.youtube)?
                                             <p>
                                               <i className="fab fa-youtube"></i>
                                               <a style={style} target="blank" href={`https://${singleCrafter.social.youtube}`}>&nbsp;youtube</a>  
                                             </p>
                                              :"")
                                           : ""
                                         }
                                            </div>
                                        </div>     
                                    </div>
                                    <p style={{textAlign:"center"}}><em>{singleCrafter.bio}</em></p>
                                </div>
                            </section>
                            <section className="row crafter-activity-info">
                                <div>
                                    <h3>Activities | Projects | Achievements</h3>
                                    <br></br>
                                    <p>UNICEF Crafts tour for home based crafters - Singles </p>
                                    <p>Makes a lot of paper designs from scrap and boxes them into wonderful products that make for a daily doing.</p>
                                    <p>2018, SEET awards winner for best paper mache, female category</p>
                                </div>
                            </section>
                            <section className="row crafter-gallery">
                                <div>
                                    <h3>Gallery</h3>
                                    <br></br>
                                    <div className="gallery-box">
                                    <div className="row">
                                        <span className="col-sm-3"><img src={imgGalleryOne}/></span>
                                        <span className="col-sm-3"><img src={imgGalleryTwo}/></span>
                                        <span className="col-sm-3"><img src={imgGalleryThree}/></span>
                                        <span className="col-sm-3"><img src={imgGalleryFour}/></span>
                                    </div>
                                    </div>
                                </div>
                            </section>
                        </section>

                        <section style={{marginTop:"30px"}} className="col-md-4">

                             <div style={{height:"96%"}} className="card">
                                <h6 style={{color:"#EA5800",textAlign:"center"}}>Related Crafter</h6>
                                  {relatedCrafters}
                             </div>

                        </section>
                    </section>

              <section  style={{marginLeft:"-30px",paddingBottom:"30px"}}  className="row">
                 <section  className="col-md-4">
                      <div style={{height:"200px",padding:"20px"}} className="card profile-page">
                            <h3 >Courses</h3>
                      </div>
                 </section>
               
                 <section className="col-md-8">
                    <div style={{height:"200px",padding:"20px"}} className="card">
                     
                     </div>
                </section>

              </section>
            
            </section>
         
        }
            </section>
        );
    }
}


CraftersProfileLink.propTypes = {
  getCrafterFromHandle: PropTypes.func.isRequired,
  singleCrafter: PropTypes.object, 
  getAllCrafters:PropTypes.func.isRequired,
  allCrafter:PropTypes.object.isRequired
  }

const mapStateToProps = (state) => ({
    singleCrafter: state.crafter.singleCrafter,
    allCrafter:state.crafter
  });


export default connect (mapStateToProps, { getCrafterFromHandle, getAllCrafters})(CraftersProfileLink);