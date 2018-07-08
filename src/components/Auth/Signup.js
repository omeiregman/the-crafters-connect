import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

import './css/auth.css';
import img_logo from './img/logo.png';

class Signup extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    this.props.registerUser(newUser);

  }

  render () {
    const { errors } = this.state;

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
              <h3>Sign Up</h3>
              <form noValidate onSubmit={this.onSubmit}>
                <p>Full Name</p>
                <input className={classnames('', {'input-invalid': errors.name})} type="text" name="name" value={this.state.name} onChange={this.onChange}/>
                {errors.name && (<div className="invalid-response">{errors.name}</div>)}
                <p>Email</p>
                <input className={classnames('', {'input-invalid': errors.email})} type="email" name="email" value={this.state.email} onChange={this.onChange}/>
                {errors.email && (<div className="invalid-response">{errors.email}</div>)}
                <p>Password</p>
                <input className={classnames('', {'input-invalid': errors.password})} type="password" name="password" value={this.state.password} onChange={this.onChange}/>
                {errors.password && (<div className="invalid-response">{errors.password}</div>)}
                <p>Confirm Password</p>
                <input className={classnames('', {'input-invalid': errors.password2})} type="password"  name="password2" value={this.state.password2} onChange={this.onChange}/>
                {errors.password2 && (<div className="invalid-response">{errors.password2}</div>)}
                <br></br>
                <input type="submit" value="Sign Up"/>
                <br></br>
                <p>Already Signed Up? <Link to='/signin'>Sign In</Link></p>
                <p>Want to support TCC? <Link to='/signup/volunteer'>Register as a Volunteer</Link></p>
              </form>
            </div>
          </div>
      </div>
   </section>
    );
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};


const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(Signup);
