import React, { Component } from 'react';
import NavComponent from '../NavComponent';
import '../../css/home-screen.css';
import img_learn from '../../images/learn.png';
import img_connect from '../../images/connect.png';
import img_promote from '../../images/promote.png';

class HomeHeaderComponent extends Component {
  constructor(props) {
    super(props);
  }
    render() {
      return (
        <div>
          <header>
            <NavComponent/>
            <div className="hero-text">
            <h1 className="header-hero">The Crafters Connect</h1>
            <h3>Lets Connect our Craft with the world</h3>
          </div>
          </header>

          <section className="about-section">
            <div className="container">
              <h2>Why The Crafters Connect?</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="about-section-card">
                    <img src={img_connect} alt="about"/>
                    <h3>Connect With Crafters</h3>
                    <p>
                      Create and maintain an online platform for crafters
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about-section-card">
                  <img src={img_promote} alt="about"/>
                  <h3>Something Goes Here</h3>
                  <p>To elaborte every Crafter and their Promoters</p>
                </div>
              </div>
                <div className="col-md-4">
                  <div className="about-section-card">
                  <img src={img_learn} alt="about"/>
                  <h3>Learn By Doing</h3>
                  <p>To accommodate online crafts courses and webinars</p>
                </div>
              </div>
              </div>
            </div>
          </section>

          <section className="crafters-craft">
            <div className="crafters-craft-content">
              <h3>Crafters and their Crafts</h3>
              <p>Meet esteemed Crafters and explore their world of crafts</p>
            </div>
          </section>
          <br/>
          <br/>
        </div>
      );
    }
}

export default HomeHeaderComponent;
