import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from '../pages/Home/Home';
// import Profile from '../pages/Profile/Profile';
// import Profiles from '../pages/Profiles/Profiles';
// import LocationRoom from '../pages/LocationRoom';
// import Event from '../pages/Event';
// import SignIn from '../pages/SignIn';
// import SignUp from '../pages/SignUp';

export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <div><Link to='/'>Home</Link></div>
          <div><Link to='/Profiles'>Profiles</Link></div>
        </nav>

        <Switch>
        {/* <Route exact path='/sign-in'>
            <SignIn />
          </Route>
          <Route exact path='/sign-up'>
            <SignUp />
          </Route>
          <Route exact path='/profiles'>
            <Profiles />
          </Route>
          <Route exact path='/profiles/:ProfileId'>
            <Profile />
          </Route>
          <Route exact path='/locations/:LocationName'>
            <LocationRoom />
          </Route>
          <Route exact path='/events/:EventId'>
            <Event />
          </Route> */}
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}