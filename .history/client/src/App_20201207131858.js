import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Route exact path = "/" component = {Landing} />
        <Route path = "/login" component = {Login} />
        <Route path = "/register" component = {Register} />
      </Router>
    </div>
  );
}

export default App;
