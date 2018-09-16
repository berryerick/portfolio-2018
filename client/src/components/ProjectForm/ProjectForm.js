import React, { Component } from 'react';
import Admin from '../Admin/Admin.js'


class ProjectForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  render(){
    return(
      <article>
        <form action="" method="post">
          <h3>Create a new project</h3>
          <div className="input-module">
            <label htmlFor="project-title">Project Title</label>
            <input type="text" name="project-title"></input>
          </div>

          <div className="input-module">
            <label htmlFor="project-description">Description</label>
            <textarea name="project-description"></textarea>
          </div>

          <div className="input-module">
            <label htmlFor="project-title">Category</label>
            <select class="" name="">
              <option class="" value="option">Web</option>
              <option class="" value="option">Industrial</option>
              <option class="" value="option">Personal</option>
              <option class="" value="option">Thoughts</option>
            </select>
          </div>

          <div className="input-module">
            <label htmlFor="project-title">Project Title</label>
            <input type="text" name="project-title"></input>
          </div>

          <button type="submit">Submit</button>

        </form>
      </article>
    )
  }

}

export default ProjectForm
