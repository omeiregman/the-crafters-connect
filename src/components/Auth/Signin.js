import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './css/auth.css';
import img_logo from './img/logo.png';

class Signin extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(newUser);
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
            <div className="col-sm-6 right-pane">
              <form onSubmit={this.onSubmit}>
                <h3>Welcome back,</h3>
                <br></br>
                <h4>Please Sign In to Continue</h4>
                <p>email</p>
                <input type="email" name="email" value={this.state.email} onChange={this.onChange}/>
                <p>password</p>
                <input type="password" name="password" value={this.state.password} onChange={this.onChange}/>
                <p className="extra-note"><Link to='/signin'>forgot password?</Link></p>
                <br></br>
                <input type="submit" value="Sign In"/>
                <br></br>
                <p>New to TCC? <Link to='/signup'>Sign Up</Link></p>
              </form>
            </div>
          </div>
      </div>
   </section>

    );
  }
}


export default Signin;
