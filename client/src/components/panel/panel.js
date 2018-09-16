import React, { Component } from 'react';
import './panel.css';

class Panel extends Component {



  render() {
    return (
      <article className="panel">
        <h3 className="mobile-text">panel header</h3>
        <p className="mobile-text">panel description</p>
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
