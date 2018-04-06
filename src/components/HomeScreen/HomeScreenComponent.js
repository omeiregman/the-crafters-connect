import React, { Component } from 'react';
import HomeHeaderComponent from './HomeHeaderComponent';
import FeatureEventComponent from './FeatureEventComponent';
import ProjectComponent from './ProjectComponent';


class HomeScreenComponent extends Component {
  constructor(props) {
    super(props);
  }
    render() {
      return (
        <div>
          <HomeHeaderComponent/>
          <FeatureEventComponent/>
          <ProjectComponent/>
        </div>
      );
    }
}

export default HomeScreenComponent;
