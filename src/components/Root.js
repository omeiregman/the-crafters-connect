import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './HomeScreen/HomeScreenComponent';
import About from './AboutComponent/About.js';
import Crafters from './CraftersComponent/Crafters';
import Gallery from './GalleryComponent/Gallery';
import Courses from './CoursesComponent/Courses';
import ExecutiveFounder from './AboutComponent/Founderone';

const Root = () => {
  return(
    <div>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path="/craftersandcrafts" component={Crafters}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/courses" component={Courses}/>
      <Route path="/about/executive_founder" component={ExecutiveFounder} />
      </Switch>
    </div>
  );
}

export default Root;
