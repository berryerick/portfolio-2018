import React, { Component } from 'react';

class Admin extends Component {

  render() {
    return (
      <main>
        <h2 className="mobile-text">Admin</h2>
        <article className Panel>
          <form>
            <h3>Create a new project</h3>
            <div className="input-module">
              <label for="project-title">Project Title</label>
              <input type="text" name="project-title"></input>
            </div>
            <div className="input-module">
              <label for="project-description">Project description</label>
              <textarea name="project-description"></textarea>
            </div>
            <div className="input-module">
              <label for="project-title">Project Title</label>
              <input type="text" name="project-title"></input>
            </div>
            <div className="input-module">
              <label for="project-title">Project Title</label>
              <input type="text" name="project-title"></input>
            </div>
          </form>
        </article>
      </main>
    )
  }

}

export default Admin
