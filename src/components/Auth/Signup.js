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
              <div className="left-pane">
                <img src={img_logo} alt="Crafters Connect" />
                <h2>The Crafters Connect</h2>
                <p className="slug">Connecting Crafters</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="right-pane">
                <h3>Sign Up</h3>
                <p>Some story here</p>
                <br></br>
                <h4>Kindly fill in your details</h4>
                <br></br>
                <p>email</p>
                <input type="email" placeholder="Enter Email"/>
                <br></br>
                <p>password</p>
                <input type="password" placeholder="Enter Password"/>
                <br></br>
                <input type="submit" value="Sign Up"/>
                <br></br>
                <p>Already Signed Up? <Link to='/signin'>Sign In</Link></p>
                <p>Want to support TCC? <Link to='/signup/volunteer'>Register as a Volunteer</Link></p>
              </div>
            </div>
          </div>
      </div>
   </section>
    );
  }
}


export default Signup;
