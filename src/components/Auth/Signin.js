import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './css/auth.css';
import img_logo from './img/logo.png';

class Signin extends Component {
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
                <p>Connecting Crafters</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="right-pane">
                <h3>Welcome back,</h3>
                <br></br>
                <h4>Please Sign In to Continue</h4>
                <br></br>
                <p>email</p>
                <input type="email" placeholder="Enter Email"/>
                <br></br>
                <p>password</p>
                <input type="password" placeholder="Enter Password"/>
                <p className="extra-note"><Link to='/signin'>forgot password?</Link></p>
                <br></br>
                <input type="submit" value="Sign In"/>
                <br></br>
                <p>New to TCC? <Link to='/signup'>Sign Up</Link></p>
              </div>
            </div>
          </div>
      </div>
   </section>

    );
  }
}


export default Signin;
