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
            <h3>Crafting is an admirably unique expression of the human mind and Crafters are the creative doers; 
              the bold explorers of the inherent features that are peculiar to them.<p>-Azeezat Sanni</p></h3>
          </div>
          </header>

          <section className="about-section">
            <div className="container">
              <h2>Why The Crafters Connect?</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="about-section-card">
                    <img src={img_connect} alt="about"/>
                    <h3>Mentorship</h3>
                    <p>
                    Learn by doing, learn on the job
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="about-section-card">
                  <img src={img_promote} alt="about"/>
                  <h3>Partnership</h3>
                  <p>Crafters, craft promoters, investors</p>
                </div>
              </div>
                <div className="col-md-4">
                  <div className="about-section-card">
                  <img src={img_learn} alt="about"/>
                  <h3>Patronage</h3>
                  <p>Connect with cratfers, explore an array of craft products and services</p>
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
        </div>
      );
    }
}

export default HomeHeaderComponent;
