import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Fragment, useEffect } from 'react';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile'
import EditProfile from './components/profile-forms/EditProfile';
import AddEducation from './components/profile-forms/AddEducation';
import AddExperience from './components/profile-forms/AddExperience';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';

// Redux Dependencies
import store from './store';
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken';
import { Provider } from 'react-redux';
import PrivateRoute from './components/routing/PrivateRoute';
import Post from './components/post/Post';


if (localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, []);

  return (
    <Provider store = {store}>
      <Router>
        <Fragment>
          <Navbar/>
          <Route exact path = "/" component = {Landing} />
          <section className = "container">
            <Alert />
            <Switch>
              <Route exact path = "/login" component = {Login} />
              <Route exact path = "/register" component = {Register} />
              <Route exact path = "/profiles" component = {Profiles} />
              <Route exact path = "/profile/:id" component = {Profile} />
              <PrivateRoute exact path = "/dashboard" component={Dashboard} />
              <PrivateRoute exact path = "/posts/:id" component={Post} />
              <PrivateRoute exact path = "/posts" component={Posts} />
              <PrivateRoute exact path = "/create-profile" component={CreateProfile}/>
              <PrivateRoute exact path = "/edit-profile" component={EditProfile}/>
              <PrivateRoute exact path = "/add-education" component={AddEducation}/>
              <PrivateRoute exact path = "/add-experience" component={AddExperience}/>
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
