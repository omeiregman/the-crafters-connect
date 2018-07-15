import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentCrafter } from '../../actions/crafterActions';

import './Nav.css';

import img_logo from './logo.png';

class Nav extends Component {

  onLogoutClick(e) {
      e.preventDefault();
      this.props.clearCurrentCrafter();
      this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div className="auth-nav-items">
        <img className="nav-avatar" src={user.avatar} alt={user.name}
          style={{ width: '25px', marginRight: '5px' }}
          title="You nust have a Gravatar connected to your email to display an image"/>
        <Link to='/' className="auth-nav-item" onClick={this.onLogoutClick.bind(this)}>Sign Out</Link>
      </div>

      );

    const guestLinks = (
      <div className="auth-nav-items">
        <Link to='/signin' className="auth-nav-item">Sign In</Link>
        <Link to='/signup' className="auth-nav-item auth-signup">Sign Up</Link>
      </div>
    );


    return(
      <div>
        <nav className="main-nav navbar navbar-expand-lg navbar-light">
            <div>
                <Link to='/' className="nav-brand nav-link"><img src={img_logo} width="100" height="30" alt=""/><span className="hero-nav-text">The Crafters Connect</span></Link>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="nav-items navbar-nav">
                    <Link to='/about' className="nav-item nav-link">About</Link>
                    <Link to='/craftersandcrafts' className="nav-item nav-link">Crafters</Link>
                    <Link to='/' className="nav-item nav-link">Courses</Link>
                    <Link to='/events' className="nav-item nav-link">Events</Link>
                    <Link className="nav-item nav-link" to="https://thetccmagazine.com/" target="_blank">Magazine</Link>
                    <Link to='/' className="nav-item nav-link">Gallery</Link>
                    { isAuthenticated ? authLinks : guestLinks }
                </div>
            </div>
        </nav>
      </div>
    );
  }
}
Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser, clearCurrentCrafter })(Nav);
