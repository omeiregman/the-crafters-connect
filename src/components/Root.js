import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './HomeScreen/HomeScreenComponent';
import About from './AboutComponent/About.js';
import Crafters from './CraftersComponent/Crafters';
import Gallery from './GalleryComponent/Gallery';
import Courses from './CoursesComponent/Courses';
import ExecutiveFounder from './AboutComponent/Founderone';
import SignIn from './Auth/Signin';
import SignUp from './Auth/Signup';
import SignUpCrafter from './Auth/SignupCrafter';
import SignUpEnthusiast from './Auth/SignupEnthusiast';


const Root = () => {
  return(
    <div>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path="/craftersandcrafts" component={Crafters}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/courses" component={Courses}/>
      <Route exact path="/about/executive_founder" component={ExecutiveFounder} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route exact path="/signup_crafter" component={SignUpCrafter} />
      <Route exact path="/signup_enthusiast" component={SignUpEnthusiast} />
      </Switch>
    </div>
  );
}

export default Root;
