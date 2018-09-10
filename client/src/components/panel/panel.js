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
          <img src="https://picsum.photos/g/600/400/?random" alt=""/>
          <div className="panel-links">
          <a className="panel-link" href="#"><svg className="github"/></a>
          </div>
        </div>

      </article>
    )
  }
}

export default Panel;
