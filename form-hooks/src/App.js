import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    const { value } = e.target;
    const regEx = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const isValid = regEx.test(value);

    setEmail(value);
    setIsEmailValid(isValid);
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    const isValid = value.length > 5;

    setPassword(value);
    setIsPasswordValid(isValid);
  };

  const handleRememberMeChange = (e) => {
    const { checked } = e.target;
    setRememberMe(checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = isPasswordValid && isEmailValid;
    setIsSubmitted(isValid);
  };

  return (
    <>
      <h1 className="text-center mt-5">Login</h1>
      <div className="container d-flex justify-content-center mt-5">
        {!isSubmitted ? (
          <form className="col-10" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className={`form-control ${
                  isEmailValid ? "is-valid" : "is-invalid"
                }`}
                id="email"
                onChange={handleEmailChange}
                value={email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  isPasswordValid ? "is-valid" : "is-invalid"
                }`}
                id="password"
                onChange={handlePasswordChange}
                value={password}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember-me"
                onChange={handleRememberMeChange}
                checked={rememberMe}
              />
              <label className="form-check-label" htmlFor="remember-me">
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        ) : (
          <p>Bienvenue, {email}!</p>
        )}
      </div>
    </>
  );
};

export default App;
