import React from "react";
import { useAuth } from "../context/AuthProvider";

const LoginForm = () => {
  let usernameInput;
  let passwordInput;

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(usernameInput.value, passwordInput.value);
  };

  return (
    <div className="login-wrap">
      <div className="login-form">
        <h1 className="h2">Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="username" className="form-control" ref={(input) => (usernameInput = input)} />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              ref={(input) => (passwordInput = input)}
            />
          </div>
          <input type="submit" className="btn btn-secondary" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;