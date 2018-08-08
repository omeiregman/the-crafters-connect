import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentCrafter } from '../../actions/crafterActions';
import { PulseLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

import './css/crafters.css';

class CraftersDashboard extends Component {
  componentDidMount() {
    this.props.getCurrentCrafter();
  }

  render() {
    const { user } = this.props.auth;
    const { crafter, loading } = this.props.crafter;

    let dashboardContent;

    if(crafter === null || loading) {
        dashboardContent = <div className="event-loader">
          <span><PulseLoader
          color={'#EA5800'}
          loading={loading}
        /></span>
        <p>Loading Profile</p>
      </div>
    } else {
      //Check if logged in user has a crafters profile
      if(Object.keys(crafter).length > 0) {
        dashboardContent = <h3 className="event-loader">Welcome <Link to='' >{user.name}</Link>,</h3>
      } else {
        //User is logged in but has no crafters profile
        dashboardContent = <div>
          <h3 className="event-loader">Hello {user.name}, you are not registered as a crafter yet....</h3>
          <Link to="/crafters/register" className="btn-reg-crafter">Register as a Crafter</Link>
        </div>
      }
    }

    return (
      <div>
        {dashboardContent}
      </div>
    );
  }
}

CraftersDashboard.propTypes = {
  getCurrentCrafter: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  crafter: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  crafter: state.crafter,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentCrafter })(CraftersDashboard);
