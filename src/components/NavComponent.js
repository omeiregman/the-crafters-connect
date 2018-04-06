import React, { Component } from 'react';
import '../css/nav.css';


class NavComponent extends Component {
  render() {
    return(
      <div>
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="#" class="home">The Crafters Connect</a>
            </div>
            <div className="navbar-nav navbar-expand">
                <a className="nav-item nav-link" href="#">Home</a>
                <a className="nav-item nav-link" href="#">Crafters</a>
                <a className="nav-item nav-link" href="#">Courses</a>
                <a className="nav-item nav-link" href="#">Blog</a>
                <a className="nav-item nav-link" href="#">Gallery</a>
                <a className="nav-item nav-link" href="#">Login/Signup</a>
            </div>
        </nav>
      </div>
    );
  }
}

export default NavComponent;
