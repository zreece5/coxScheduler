import React from 'react';
import './App.css';
import schedulerMainPage from './schedulerMainPage';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/schedulerMainPage" component={schedulerMainPage} />
      </Switch>

      </header>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Welcome to <i>Rendezvous</i></h1>
    <Link to='/schedulerMainPage'
            className="App-link">
            Click Here to Schedule an Appointment</Link>
  </div>
);

export default App;
