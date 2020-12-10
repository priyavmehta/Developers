import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Provider } from 'react-redux'
import { Fragment, useEffect } from 'react';
import store from './store';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken';

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
              <Route path = "/login" component = {Login} />
              <Route path = "/register" component = {Register} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
