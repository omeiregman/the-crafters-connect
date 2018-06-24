import React, { Component } from 'react';

import img_craftstar from '../../images/craft-star.jpeg';


class FeatureEventComponent extends Component {
  // constructor(props){
  //   super(props);

  // }



  render() {
    return (
      <div>
        <section className="featured-item">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3>Video of the week</h3>
                <div className="freebie">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/M7e93BhppIk?start=8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                  <div className="freebie-overlay">
                    <p>{/*This week Kolapo Adebayo
                      teaches us how to make custom 4G phones from raffia. Grab a palm leaf, and come join us.*/}</p>
                  </div>
                </div>

              </div>
              <div className="col-md-6">
                <h3>CraftStar of the week</h3>
                <div className="row craft-star">
                  <div className="col-sm-6 craft-star-info">
                    <p className="">Our CraftStar of the week is <br></br><b>Akorede Sodipe,</b> CEO KOSH Beads.
                      Here she shares her love for crafts in bead making, aso oke designing/weaving and business experiences.</p>
                      <p>Read More >>></p>
                      {/* <div className="btn-readmore">
                        Read More
                      </div> */}
                  </div>
                  <div className="col-sm-6">
                    <div className="craft-star-img">
                      <img src={img_craftstar} alt="craft star"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="upcoming-events">
          <div className="row">
            <div className="col-md-5">

            </div>
            <div className="col-md-7 upcoming-details">
              <h3>Upcoming Events</h3>
              <div className="event-date">
                <h2></h2>
                <div></div>
              </div>
              <div className="event-info">
                <h4>TCC Hangout - The Crafters Chat-out</h4>
                <p>Lagos, Abuja, Jos, Port-Harcourt, Kogi, Oyo</p>
              </div>
              <div className="event-date">
                <h2></h2>
                <div></div>
              </div>
              <div className="event-info">
                <h4>The Crafters Conference</h4>
                <p>38th week of September, Lagos</p>
              </div>
              <div className="event-date">
                <h2></h2>
                <div></div>
              </div>
              <div className="event-info">
                <h4>Crafts Tourism</h4>
                <p>Dye Pit, Kofar Mata, Kano State, Nigeria</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FeatureEventComponent;
