import React, { Component } from 'react';
//import Nav from '../NavComponent/Nav';
import '../../css/home-screen.css';
import img_learn from '../../images/learn.png';
import img_connect from '../../images/connect.png';
import img_promote from '../../images/promote.png';


class HomeHeaderComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      slideNumber: 3,
      slideDuration: 4000,
      transitionDuration: 2,
      advertTimer: null,
      translateValue: 2
    }

    this.nextImage = this.nextImage.bind(this);
    this.stopAdvertTimer = this.stopAdvertTimer.bind(this);
    this.startAdvertTimer = this.startAdvertTimer.bind(this);
  }

  nextImage() {
    if (this.state.currentIndex === this.state.slideNumber - 1) {
      return this.setState({
        currentIndex: 0
      })
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }))
  }


  startAdvertTimer(index) {
    this.setState({
      currentIndex: index
    })
    const timer = setInterval(() => {
      this.nextImage();
    }, this.state.slideDuration);

    this.setState({
      advertTimer: timer
    })
  }

  stopAdvertTimer() {
    this.state.advertTimer && clearInterval(this.state.advertTimer);
    this.setState({
      advertTimer: null
    });
  }


  componentDidMount() {
    this.startAdvertTimer(this.state.currentIndex);
  }

  componentWillUnmount() {
    this.stopAdvertTimer();
  }
  render() {
    return (
      <div>
        <header>
          <section className='home-slider' style={{
            background: `linear-gradient(rgba(250, 150, 32, 0.3), rgba(250, 150, 32, 0.3)), url(https://s3-us-west-1.amazonaws.com/the-crafters-connect/homeslider/home-slider-${this.state.currentIndex}.jpg)`,
            transition: `ease ${this.state.transitionDuration}s`
          }}>
            <div className="hero-text">
              <h1 className="header-hero">The Crafters Connect</h1>
              <p>Crafting is an admirably unique expression of the human mind and Crafters are the creative doers;
              the bold explorers of the inherent features that are peculiar to them. <br></br> -Azeezat Sanni</p>
            </div>
          </section>

        </header>

        <section className="about-section">
          <div className="container">
            <h2>Why The Crafters Connect?</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="about-section-card">
                  <img src={img_connect} alt="about" />
                  <h3>Mentorship</h3>
                  <p>
                    Learn by doing, learn on the job
                    </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about-section-card">
                  <img src={img_promote} alt="about" />
                  <h3>Partnership</h3>
                  <p>Crafters, craft promoters, investors</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about-section-card">
                  <img src={img_learn} alt="about" />
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
