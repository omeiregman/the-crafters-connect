import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CrafterHeader from './CrafterHeader';


class Crafters extends Component {
  render() {
    return(
      <section>
      <CrafterHeader/>
      <div className="container">
      <p>Register as a crafter</p>
      <Link to='/crafters/register'><button>Register</button></Link>
      <Link to='/crafters/dashboard'><button>Profile</button></Link>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
        
      </section>
    )
  }
}

export default Crafters;
