import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './common/PrivateRoute';

import Home from './HomeScreen/HomeScreenComponent';
import About from './AboutComponent/About.js';
import Crafters from './CraftersComponent/Crafters';
import Gallery from './GalleryComponent/Gallery';
import Courses from './CoursesComponent/Courses';
import ExecutiveFounder from './AboutComponent/Founderone';
import FounderTwo from './AboutComponent/Foundertwo';
import SignIn from './Auth/Signin';
import SignUp from './Auth/Signup';
import RegisterCrafter from './CraftersComponent/CrafterRegistration';
import RegisterVolunteer from './Auth/RegisterVolunteer';
import Events from './EventComponent/Event';
import SingleEvent from './EventComponent/SingleEvent';
import CraftersDashboard from './CraftersComponent/CraftersDashboard';
import EditCrafter from './CraftersComponent/EditCrafter';
import AdminDashboard from './AdminDashboard/AdminDashboard';





const Root = () => {
  return(
    <div>
      <Switch>
      <Route exact path='/' component={Home}/>

      <Route exact path='/about' component={About}/>
      <Route path="/about/executive-creative-director" component={ExecutiveFounder} />
      <Route path="/about/executive-founder" component={FounderTwo} />

      <Route exact path="/craftersandcrafts" component={Crafters}/>
      <PrivateRoute exact path="/crafters/register" component={RegisterCrafter} />
      <PrivateRoute exact path="/crafters/dashboard" component={CraftersDashboard} />
      <PrivateRoute exact path="/crafters/edit" component={EditCrafter} />

      <Route path="/gallery" component={Gallery}/>
      <Route path="/courses" component={Courses}/>
      
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/crafters/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route path="/signup/volunteer" component={RegisterVolunteer} />

      <Route exact path="/events" component={Events} />
      <Route exact path="/events/:name" render={ props => <SingleEvent {...props} /> }/>

      <PrivateRoute exact path="/admindashboard/34a2b1a302705439fc563394038662a42bf14756" component={AdminDashboard} />
      
      </Switch>
    </div>
  );
}

export default Root;
