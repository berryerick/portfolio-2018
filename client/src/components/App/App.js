import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import '../../resources/typebase.css';
import Panel from '../Panel/Panel.js'
import Admin from '../Admin/Admin.js'

const Home = () => (
  <main className="">
    <h2 className="mobile-text">home</h2>
    <Panel/>
    <Panel/>
    <Panel/>
    <Panel/>
  </main>
)

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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Web">Web</Link></li>
                <li><Link to="/Industrial">Industrial</Link></li>
                <li><Link to="/Personal">Personal</Link></li>
                <li><Link to="/thoughts">Thoughts</Link></li>
              </ul>
            </div>
          </nav>

          <Route exact path="/" component={Home}/>
          <Route path="/admin" component={Admin}/>

        </div>
      </Router>
    );
  }
}

export default App;
