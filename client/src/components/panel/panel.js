import React, { Component } from 'react';
import './panel.css';

class Panel extends Component {



  render() {
    return (
      <article className="panel">

        <div className="panel-info">
          <h3>panel header</h3>
          <p>panel description</p>
        </div>

        <div className="panel-image" href="#">
          <img src="https://picsum.photos/g/600/360/?random" alt=""/>
        </div>
        <div className="panel-links">
          <a className="panel-link">A</a>
          <a className="panel-link">A</a>
          <a className="panel-link">A</a>
          <a className="panel-link">A</a>
        </div>

      </article>
    )
  }
}

export default Panel;
