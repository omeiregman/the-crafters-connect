import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from '../../actions/authActions';
import { BarLoader } from 'react-spinners';

import {Link} from 'react-router-dom';

import './css/auth.css';
import img_logo from './img/logo.png';

class Signin extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {},
      loading: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/');
    }

    if(nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
        loading:false
      })
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    const userData = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.loginUser(userData);
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
              <form noValidate onSubmit={this.onSubmit}>
                <h3>Welcome back,</h3>
                <br></br>
                <h4>Please Sign In to Continue</h4>
                <p>email</p>
                <input className={classnames('', {'input-invalid': errors.email})} type="email" name="email" value={this.state.email} onChange={this.onChange}/>
                {errors.email && (<div className="invalid-response">{errors.email}</div>)}
                <p>password</p>
                <input type="password" name="password" value={this.state.password} onChange={this.onChange}/>
                {errors.password && (<div className="invalid-response">{errors.password}</div>)}
                <p className="extra-note"><Link to='/signin'>forgot password?</Link></p>
                <br></br>
                <div>
                  <BarLoader
                    color={'#FBB062'}
                    loading={this.state.loading}
                    width={225}
                  />
                </div>
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

Signin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})


export default connect(mapStateToProps, { loginUser })(Signin);
