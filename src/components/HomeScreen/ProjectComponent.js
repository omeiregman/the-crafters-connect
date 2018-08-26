import React, { Component } from 'react';
import img_project1 from '../../images/project1.png';
import img_project2 from '../../images/project2.png';
import img_project3 from '../../images/project3.jpg';
import img_project4 from '../../images/project4.png';
import img_project5 from '../../images/project5.png';
import img_project6 from '../../images/project6.png';
import img_project7 from '../../images/project7.JPG';
import img_project8 from '../../images/project4.png';

import img_partner1 from '../../images/partner1.jpg';
import img_partner2 from '../../images/partner2.jpg';
import img_partner3 from '../../images/partner3.jpg';
import img_partner4 from '../../images/partner4.jpg';

class ProjectComponent extends Component {

  render(){
    return(
      <div>
        <section className="project-section">
          <div className="row">
            <div className="col-md-6 project-list">
              <div className="row">
                <div className="col-3">
                  <img src={img_project1} alt="project"/>
                </div>
                <div className="col-3">
                  <img src={img_project2} alt="project"/>
                </div>
                <div className="col-3">
                  <img src={img_project3} alt="project"/>
                </div>
                <div className="col-3">
                  <img src={img_project4} alt="project"/>
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col-md-3">
                  <img src={img_project5} alt="project"/>
                </div>
                <div className="col-md-3">
                  <img src={img_project6} alt="project"/>
                </div>
                <div className="col-md-3">
                  <img src={img_project7} alt="project"/>
                </div>
                <div className="col-md-3">
                  <img src={img_project8} alt="project"/>
                </div>
              </div>
            </div>
            <div className="col-md-6 project-details">
              <div className="container">
                <h3>PROJECTS</h3>
                <p>We believe the best way to learn is by putting your skills to use.
                  That’s why every Crafter’s class has a project that lets you practice and get feedback.</p>
                  <div className="btn-moreprojects">See More Projects</div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-support">
          <h2>Service Support</h2>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <img src={img_partner1} alt="service support"/>
              </div>
              <div className="col-sm-3">
                <img src={img_partner2} alt="service support"/>
              </div>
              <div className="col-sm-3">
                <img src={img_partner3} alt="service support"/>
              </div>
              <div className="col-sm-3">
                <img src={img_partner4} alt="service support"/>
              </div>
            </div>
            <div>
            
            </div>
          </div>
          <br/>
          <br/>
        </section>
      </div>
    );
  }
}

export default ProjectComponent;
