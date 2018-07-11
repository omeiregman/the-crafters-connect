import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentCrafter } from '../../actions/crafterActions'

class CraftersComponent extends Component {

  componentDidMount() {
      this.props.getCurrentCrafter();
  }

  render() {
    return(
      <div>
        <h2>Crafters and their Crafts</h2>
      </div>
    );
  }
}

export default connect(null, { getCurrentCrafter })(CraftersComponent);
