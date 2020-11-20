import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Item from '../pages/Item/Item';
import Items from '../pages/Items/Items';
import FeedPage from '../pages/FeedPage';

export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <div><Link to='/'>Home</Link></div>
          <div><Link to='/items'>Items</Link></div>
        </nav>

        <Switch>
          <Route exact path='/items/:itemId'>
            <Item />
          </Route>
          <Route exact path='/feedpage'>
            <FeedPage />
          </Route>
          <Route exact path='/items'>
            <Items />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}