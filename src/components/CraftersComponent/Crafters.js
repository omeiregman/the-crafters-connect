import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CrafterHeader from './CrafterHeader';


class Crafters extends Component {
  render() {

    
    return(
      <section>
      <CrafterHeader/>
      <div className="container">
      <p>Register as a crafter</p>
      
      {this.props.auth.isAuthenticated ? (<Link to='crafters/register'><button>Register</button></Link>)
             : (<Link to={{ pathname: '/signin', state: { from: `/crafters/register`, info:"You need to be Signed in to Register as a Crafter" }}}>
             <button>Register</button>
                    </Link>)}

      {this.props.auth.isAuthenticated ? (<Link to='crafters/dashboard'><button>Profile</button></Link>)
         : (<Link to={{ pathname: '/signin', state: { from: `/crafters/dashboard`, info:"Please Sign In to access your Craft Profile" }}}>
                    <button>Profile</button>
                           </Link>)}
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


Crafters.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Crafters);
