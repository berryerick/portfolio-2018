import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import './typebase.css';
import Panel from './components/panel/panel.js'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <div className="mobile-text">
              <h3 className="name">Erick Berry</h3>
            </div>
          </header>

          <nav>
            <div className="mobile-text no-scroll">
              <ul>
                <li><Link to="/Web">Web</Link></li>
                <li><Link to="/Industrial">Industrial</Link></li>
                <li><Link to="/Personal">Personal</Link></li>
                <li><Link to="/This">Personal</Link></li>
                <li><Link to="/This">Personal</Link></li>
              </ul>
            </div>
          </nav>

          <main className="">
            <h2 className="mobile-text">Projects</h2>
            <Panel/>
            <Panel/>
            <Panel/>
            <Panel/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
