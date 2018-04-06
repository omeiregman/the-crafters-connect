import React, { Component } from 'react';
import HomeHeaderComponent from './HomeHeaderComponent';
import FeatureEventComponent from './FeatureEventComponent';

class HomeScreenComponent extends Component {
  constructor(props) {
    super(props);
  }
    render() {
      return (
        <div>
          <HomeHeaderComponent/>
          <FeatureEventComponent/>
        </div>
      );
    }
}

export default HomeScreenComponent;
