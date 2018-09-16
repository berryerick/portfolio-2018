import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Register extends Component {

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

  render({match}){
    return(
      <article className Panel>
        <form action="" method="post">
          <h3>Register</h3>
          <Link to={`${match.url}/login`}>Login</Link>
          <div className="input-module">
            <label htmlFor="email">Email</label>
            <input type="text" name="email"></input>
          </div>

          <div className="input-module">
            <label htmlFor="password">Password</label>
            <input type="password" name="password"></input>
          </div>

          <div className="input-module">
            <label htmlFor="confirm_password">Confirm password</label>
            <input type="password" name="confirm_password"></input>
          </div>

          <button type="submit">Submit</button>

        </form>
      </article>
    )
  }

}

export default Register
