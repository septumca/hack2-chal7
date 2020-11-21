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
import Login from '../pages/Login/Login';
import FeedPage from '../components/FeedPage';
import TopAppBar from '../components/TopAppBar';


export default function AppRouter() {
  return (
    <>
    <TopAppBar />
    <Router>
      <div>
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
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}