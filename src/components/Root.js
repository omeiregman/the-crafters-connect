import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './HomeScreen/HomeScreenComponent';
import About from './AboutComponent/About.js';
import Crafters from './CraftersComponent/CraftersComponent';
import Gallery from './GalleryComponent/Gallery';
import Courses from './CoursesComponent/Courses';
import ExecutiveFounder from './AboutComponent/Founderone';
import FounderTwo from './AboutComponent/Foundertwo';
import SignIn from './Auth/Signin';
import SignUp from './Auth/Signup';
import RegisterCrafter from './CraftersComponent/CrafterRegistration';
import RegisterVolunteer from './Auth/RegisterVolunteer';
import Events from './EventComponent/Event';


const Root = () => {
  return(
    <div>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route path="/craftersandcrafts" component={Crafters}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/courses" component={Courses}/>
      <Route path="/about/executive-creative-director" component={ExecutiveFounder} />
      <Route path="/about/executive-founder" component={FounderTwo} />
      <Route path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route path="/signup/volunteer" component={RegisterVolunteer} />
      <Route path="/crafters/register" component={RegisterCrafter} />
      <Route exact path="/events" component={Events} />
      {/* <Route exact path="/events/:name" render={ props => <SingleEvent {...props} }/> */}
      </Switch>
    </div>
  );
}

export default Root;
