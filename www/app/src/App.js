import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AdminContainer from './admin/AdminContainer';
import AdminContainerDatail from './admin/AdminContainerDatail';

import LoginContainer from '../src/login/LoginContainer';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminMovies from './admin/pages/AdminMovies';
import AdminUsers from './admin/pages/AdminUsers';
import AdminHighlights from './admin/pages/AdminHighlights';

import AdminMoviesDetail from './admin/pages/AdminMoviesDetail'

import SiteContainer from './site/SiteContainer';

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <SiteContainer/>}/>
      <Route exact path="/login" render={() => <LoginContainer/>}/>
      <Route exact path="/admin" render={() => <AdminContainer page={'movies'} container={AdminMovies} />}/>
      <Route exact path="/admin/dashboard" render={() => <AdminContainer page={'dashboard'} container={AdminDashboard} />}/>
      <Route exact path="/admin/highlights" render={() => <AdminContainer page={'highlights'} container={AdminHighlights} />}/>
      <Route exact path="/admin/users" render={() => <AdminContainer page={'users'} container={AdminUsers} />}/>
      <Route exact path="/admin/movies" render={() => <AdminContainer page={'movies'} container={AdminMovies} />}/>
      <Route path="/admin/movies/:paramid" render={({match}) => <AdminContainerDatail page={'movie'} paramid={match.params.paramid} container={AdminMoviesDetail} />}/>      
    </Switch>
  );
}

export default App;
