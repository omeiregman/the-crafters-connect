import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Crafters extends Component {
  render() {
    return(
      <div>
        <h2>Crafters and their Crafts</h2>
        <p>Register as a crafter</p>
        <Link to='/crafters/register'><button>Register</button></Link>
        <Link to='/crafters/dashboard'><button>Profile</button></Link>

      </div>
    )
  }
}

export default Crafters;
