import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import CreateProfile from '../profile-form/CreateProfile'
import EditProfile from '../profile-form/EditProfile'
import AddExperience from '../profile-form/AddExperience'
import AddEducation from '../profile-form/AddEducation'
import Profile from '../profile/Profile'

const Routes = () => {
  return (
    <Fragment>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile/:id' component={Profile} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/add-experience' component={AddExperience} />
        <PrivateRoute exact path='/add-education' component={AddEducation} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
