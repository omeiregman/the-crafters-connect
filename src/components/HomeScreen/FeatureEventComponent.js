import React, { Component } from 'react';

import img_craftstar from '../../images/craft-star.jpeg';


class FeatureEventComponent extends Component {
  constructor(props){
    super(props);

  }



  render() {
    return (
      <div>
        <section className="featured-item">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3>Freebie of the week</h3>
                <div className="freebie">
                  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hzRjX4ERWks?rel=0&amp;showinfo=0&amp;start=8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                  <div className="freebie-overlay">
                    <p>{/*This week Kolapo Adebayo
                      teaches us how to make custom 4G phones from raffia. Grab a palm leaf, and come join us.*/}</p>
                  </div>
                </div>

              </div>
              <div className="col-md-6">
                <h3>Craft Star of the week</h3>
                <div className="row craft-star">
                  <div className="col-sm-6 craft-star-info">
                    <p className="">Our crafter of the week is the enigmatic Chibuzor Okeke, CEO something vetures.
                      Here he shares experiences and teaches us how to make computer screens from dog food.</p>
                      <div className="btn-readmore">
                        Read More
                      </div>
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
        <br/>
        <br/>

        <section className="upcoming-events">
          <div className="row">
            <div className="col-lg-6">

            </div>
            <div className="col-lg-6 upcoming-details">
              <h3>Upcoming Events</h3>
              <div className="event-date">
                <h2>23</h2>
                <div>JUN '18</div>
              </div>
              <div className="event-info">
                <h4>Crafts Courses and Party</h4>
                <p>Tuesday, 8:00am | Tafawa Balewa Square, Lagos</p>
              </div>
              <div className="event-date">
                <h2>17</h2>
                <div>AUG '18</div>
              </div>
              <div className="event-info">
                <h4>The Crafters Show</h4>
                <p>Tuesday, 8:00am | Tafawa Balewa Square, Lagos</p>
              </div>
              <div className="event-date">
                <h2>31</h2>
                <div>NOV '18</div>
              </div>
              <div className="event-info">
                <h4>Crafts Tourism - Ogbomosho</h4>
                <p>Tuesday, 8:00am | Tafawa Balewa Square, Lagos</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FeatureEventComponent;
