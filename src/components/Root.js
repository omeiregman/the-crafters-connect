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
import CraftersProfileLink from './CraftersComponent/CraftersProfileLink';
<<<<<<< HEAD
import Teaser from './HomeScreen/Teaser.js';
<<<<<<< HEAD
=======
import AdminDashboard from './AdminDashboard/AdminDashboard';
>>>>>>> a87e360100bc8ab697226d97ecf0db78053ba747

=======

=======
import AdminDashboard from './AdminDashboard/AdminDashboard';
import Craftconfrenceregistration from './Modalpages/Craftconfrence/Craftconfrenceregistration';
>>>>>>> c863a133f67c7ebdbeacf3db498ac65bc79be493
>>>>>>> 3cbb6257d7754d5a72cb6a71b8ea4b8256dd6864



const Root = () => {
  return(
    <div>
      <Switch>
<<<<<<< HEAD
      <Route exact path='/' component={Teaser}/>
      {/*  <Route exact path='/' component={Home}/>


=======
        <Route exact path='/' component={Home}/>
<<<<<<< HEAD
>>>>>>> a87e360100bc8ab697226d97ecf0db78053ba747
=======
        <Route exact path='/confrence' component={Craftconfrenceregistration}/>
>>>>>>> c863a133f67c7ebdbeacf3db498ac65bc79be493
>>>>>>> 3cbb6257d7754d5a72cb6a71b8ea4b8256dd6864
        <Route exact path='/about' component={About}/>
        <Route path="/about/executive-creative-director" component={ExecutiveFounder} />
        <Route path="/about/executive-founder" component={FounderTwo} />

        <Route exact path="/craftersandcrafts" component={Crafters}/>
        <Route exact path="/crafter/:handle" component={CraftersProfileLink}/>
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

<<<<<<< HEAD
  <PrivateRoute exact path="/admindashboard/34a2b1a302705439fc563394038662a42bf14756" component={AdminDashboard} /> */}
=======
  *<PrivateRoute exact path="/admindashboard/34a2b1a302705439fc563394038662a42bf14756" component={AdminDashboard} />}
<<<<<<< HEAD
>>>>>>> a87e360100bc8ab697226d97ecf0db78053ba747
=======
>>>>>>> c863a133f67c7ebdbeacf3db498ac65bc79be493
>>>>>>> 3cbb6257d7754d5a72cb6a71b8ea4b8256dd6864
      </Switch>
    </div>
  );
}

export default Root;
