import React, { Component } from 'react';
import './App.css';
import Panel from './components/panel/panel.js'

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="main-header">
          <h1 className="main-title">Erick Berry</h1>
        </header>

        <main className="">
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
