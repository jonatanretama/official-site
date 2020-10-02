import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path = '/about' component = {About} />
          <Route path = '/contact' component = {Contact} />
          <Route path = '/' component = {Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
