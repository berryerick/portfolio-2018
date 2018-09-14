import React, { Component } from 'react';
import './App.css';
import Panel from './components/panel/panel.js'

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="main-header">
          <h3 className="main-title">Erick Berry</h3>
        </header>

        <main className="">
          <h2>Projects</h2>
          <Panel/>
          <Panel/>
          <Panel/>
          <Panel/>
        </main>

      </div>
    );
  }
}

export default App;
