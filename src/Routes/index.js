import React from 'react'; 

import Home from '../MainPages/Home'
import Calendar from '../MainPages/Schedule/Calendar';
import Stats from '../MainPages/Stats';
import TeamProfile from '../TeamProfile';
import Login from '../Login';
import AdminPages from '../AdminPages';
import AdminContainer from '../AdminContainer';
import { Route, Switch } from 'react-router-dom';




const AllRoutes = () => {
  return (
    <Switch>
          <Route exact path = '/' component= { Home } />
          <Route exact path = '/schedule' component= { Calendar } />
          <Route exact path = '/stats' component= { Stats } />
          <Route path = '/team/:handle' component= { TeamProfile } />
          <Route exact path = '/login' component= { Login } />
          <Route exact path = '/admin' component= { AdminPages } />
          <Route exact path = '/secret' component = { AdminContainer } />

        </Switch>
    )
};

export default AllRoutes; 