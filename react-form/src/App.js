import React from "react";
import { FormErrors } from './FormErrors';
import './App.css';
import './Form.css';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      
      email: '',
      userName:'',
      rememberMe: false,
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleUserInput = (e) => {
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
                  }, this.validateForm)
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid})
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error')
  }

  handleChange(event) {
    console.log(event)
   if(event.target.id === 'rememberMe'){
      this.setState({rememberMe: event.target.value})
    }
  }

  render () {
    return (
      <form className="demoForm" onChange={this.handleChange}>
        <h2>Sign up with my form</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}  />
        </div>



        <div className="checkbox">
          <label><input id="rememberMe"type="checkbox" value={this.state.rememberMe.value} /> Remember me</label>
        </div>


        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Submit</button>
      </form>
    )
  }
}

export default App;
