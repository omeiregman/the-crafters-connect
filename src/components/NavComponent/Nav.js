import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

import img_logo from './logo.png';

class Nav extends Component {
  render() {
    return(
      <div>
        <nav className="main-nav navbar navbar-expand-lg navbar-light">
            <div>
                <Link to='./' className="nav-brand nav-link"><img src={img_logo} width="100" height="30"/><span className="hero-nav-text">The Crafters Connect</span></Link>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="nav-items navbar-nav">
                    <Link to='/about' className="nav-item nav-link">About</Link>
                    <Link to='/' className="nav-item nav-link">Crafters</Link>
                    <Link to='/' className="nav-item nav-link">Courses</Link>
                    <Link className="nav-item nav-link" to="http://www.blog.thecraftersconference.com" target="_blank">Blog</Link>
                    <Link to='/' className="nav-item nav-link">Gallery</Link>
                    <Link to='/signin' className="nav-item nav-link">Sign In</Link>
                    <Link to='/signup' className="nav-item nav-link">Sign Up</Link>
                </div>
            </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
