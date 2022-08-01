import React from "react";
import './App.css';

class LoginForm extends React.Component {
  constructor(props) {
    super()
 
    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }
  }
    handleEmailChange = e => {
      const value = e.target.value
      const regEx = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      const isValid = regEx.test(value)
  
      this.setState({
        email: value,
        emailIsValid: isValid
      })
    }
  
    handlePasswordChange = e => {
      const value = e.target.value
      const isValid = value.length > 5
      
      this.setState({
        password: value,
        passwordIsValid: isValid
      })
    }
  
    handleRememberMeChange = e => {
      this.setState({ rememberMe: e.target.checked })
    }
  
    handleSubmit = e => {
      e.preventDefault()
      const allIsValid = this.state.passwordIsValid && this.state.emailIsValid
  
      this.setState({ isSubmitted: allIsValid })
    }
  
    render() {
      const emailInputClass = this.state.emailIsValid ? 'is-valid' : 'is-invalid'
      const passwordInputClass = this.state.passwordIsValid ? 'is-valid' : 'is-invalid'
  
      return (
        <>
          <h1 className="text-center mt-5">Login</h1>
          <div className="container d-flex justify-content-center mt-5">
            {
              this.state.isSubmitted ? (
                <div>
                  <p>{this.state.email}</p>
                </div>
              ) : (
                  <form
                    className="col-10"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <input
                        type="email"
                        className={`form-control ${emailInputClass}`}
                        id="email"
                        onChange={this.handleEmailChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                        type="password"
                        className={`form-control ${passwordInputClass}`}
                        id="password"
                        onChange={this.handlePasswordChange}
                      />
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="remember-me"
                        onChange={this.handleRememberMeChange}
                      />
                      <label className="form-check-label" htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
              )
            }
          </div>
        </>
      )
    }
  }

export default LoginForm ;