import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './css/auth.css';
import img_logo from './img/logo.png';

class Signup extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLogged: false
    }
  }

  render () {
    return (
      <section className="login-pane">
       <div className="">
          <div className="row">

            <div className="col-sm-6">
              <div className="right-pane-up">
                <div className="left-pane-up">
                  <img src={img_logo} alt="Crafters Connect" />
                  <h2>The Crafters Connect</h2>
                  <p className="slug">Connecting Crafters</p>
                </div>
                <br></br>
                <div className="right-pane-down">
                  <h3>Welcome, <br></br>Please Select a Category</h3>
                  <br></br>

                  <Link to='/signup_crafter'><div className="category-btn">SIGN UP AS A CRAFTER</div></Link>
                  <br></br>
                  <Link to='/signup_enthusiast'><div className="category-btn">SIGN UP AS AN ENTHUSIAST</div></Link>

                  <br></br>
                  <p>Already have an account? <Link to='/signin'>Sign In</Link></p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">

              <div className="left-pane-down">
                <h3>Our User Categories</h3>
                <br></br>
                <h4>Sign Up as a Crafter</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi libero eos cumque, reiciendis natus delectus molestiae accusamus dignissimos possimus quas. Obcaecati quae dolore reprehenderit voluptates officiis perferendis natus iure nisi.</p>
                <br></br>
                <h4>Sign Up as a Craft Enthusiast</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum maxime laborum cupiditate, vel sint delectus corporis accusantium ab dolorum quidem. Magni maiores accusamus voluptate commodi iste, est ea quam quia!</p>
              </div>
            </div>
          </div>
      </div>
   </section>
    );
  }
}


export default Signup;
