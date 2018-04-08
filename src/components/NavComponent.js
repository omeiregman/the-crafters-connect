import React, { Component } from 'react';
import '../css/nav.css';


class NavComponent extends Component {
  render() {
    return(
      <div>
        <nav class="main-nav navbar navbar-expand-lg navbar-light">
            <div>
                <a class="nav-brand" href="#">The Crafters Connect</a>
            </div>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="nav-items navbar-nav">
                    <a class="nav-item nav-link" href="#">About</a>
                    <a class="nav-item nav-link" href="#">Crafters</a>
                    <a class="nav-item nav-link" href="#">Courses</a>
                    <a class="nav-item nav-link" href="#">Blog</a>
                    <a class="nav-item nav-link" href="#">Gallery</a>
                    <a class="nav-item nav-link" href="#">Login/Sign Up</a>
                </div>
            </div>
        </nav>

      {/*  <nav className="navbar">
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
        </nav>*/}
      </div>
    );
  }
}

export default NavComponent;
