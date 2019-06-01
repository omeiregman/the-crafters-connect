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


    componentWillMount(){
        this.props.getAllCrafters();
    }
    componentDidMount() {

        const crafterUrl = this.props.match.params.handle;
        if (this.props.match.params.handle) {
            
            this.props.getCrafterFromHandle(crafterUrl);
             
        }
        this.setState({
            crafterDetail: this.props.singleCrafter
        });
    }


    render() {
        const { loading,singleCrafter,allCrafter } = this.props;
       // console.log("ok..",this.props)
        let style={
            color:"#762C14"
        } 
       let relatedCrafters;
      // console.log("ok...",allCrafter.allCrafters)
       if(!isEmpty(allCrafter.allCrafters)){
           let x=0;

        //The related crafters colum i.e shows a list of all the other crafters
        relatedCrafters=allCrafter.allCrafters.slice(0,12).map(profile=>
        <div key={x+=1} className="row">
            <div className="col-md-12 profilecontainer">
                <div  className="row profilecontainerRow">
                    <div className="col-md-4 other_crafters_profile_image">
                       <img  className="profile-image r-profile-image" src={profileImage} alt="profile" />
                    </div>
                    <div className="col-md-8">
                        {!isEmpty(profile.user)?<p className="othercraftersprofilehandle"><a className="othercraftersprofilehandle" href={`/crafter/${profile.handle}`}>{profile.user.name}</a></p>:<span>
                    <PulseLoader
                    color={'#EA5800'}
                    loading={loading}
                    />
                  </span>}
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
                            <div className="back">
                                <Link className="backlink" to="/craftersandcrafts"> <i className="material-icons arrowback">arrow_back</i><span>Back</span></Link>
                            </div>
                    <section className="row">
                        <section className="col-md-8">
                            <section>
                                <div className="row profile-info crafter-basic-info">
                                    <div className="col-sm-4">
                                        <img className="profile-image" src={profileImage} alt="profile" />
                                    </div>
                                    <div className=" col-sm-8">
                                         <h2 className="singleCrafterUserName" >{!(isEmpty(singleCrafter.user))?singleCrafter.user.name: <PulseLoader
                                            color={'#EA5800'}
                                            loading={loading}
                                            />}
                                         </h2>
                                          
                                      <small>{singleCrafter.status}</small> 

                                        <h2 className="location"><i className="fas fa-map-marker-alt"></i>{singleCrafter.location}</h2>
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
                                    <span className="col-sm-1 col-1"> <i className="material-icons arrows">arrow_back_ios</i></span>
                                        {/*<span className="col-sm-1"><img src={imgGalleryOne}/></span>*/}
                                        <span className="col-sm-3 col-3"><img src={imgGalleryTwo}/></span>
                                        <span className="col-sm-3 col-3"><img src={imgGalleryThree}/></span>
                                        <span className="col-sm-3 col-3"><img src={imgGalleryFour}/></span>
                                        <span className="col-sm-2 col-2"> <i className="material-icons arrows">arrow_forward_ios</i></span>
                                    </div>
                                    </div>
                                </div>
                            </section>
                        </section>

                        <section className="col-md-4 related_crafters">

                             <div className="card">
                                <h6>Related Crafters</h6>
                                  {relatedCrafters}
                             </div>

                        </section>
                    </section>

              <section className="row courses">
                 <section  className="col-md-4 ">
                      <div className="card profile-page">
                            <h3 >Courses</h3>
                      </div>
                 </section>
               
                 <section className="col-md-8">
                    <div className="card">
                   
                     </div>
                </section>

              </section>
              <section className=" related_crafters2">

                <div className="card">
                <h6>Related Crafters</h6>
                    {relatedCrafters}
                </div>

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