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
                  
                </div>
              </div>
              <div className="col-md-6">
                <h3>Craft Star of the week</h3>
                <div className="row craft-star">
                  <div className="col-sm-6">
                    <p className="craft-star-info">Our crafter of the week is the enigmatic Chibuzor Okeke, CEO something vetures.
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
      </div>
    );
  }
}

export default FeatureEventComponent;
