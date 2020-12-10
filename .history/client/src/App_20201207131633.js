import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Route exact path = "/" component = {Landing} />
      </Router>
    </div>
  );
}

export default App;
