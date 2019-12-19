import React, { Component } from "react";
import "./Login.css";

export class Login extends Component {
  render() {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center login-container">
        <form className="d-flex flex-column justify-content-center align-items-center">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="loginInput"
              placeholder="Enter login"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Enter password"
            />
          </div>
          <button type="button" class="btn btn-login">
            Login
          </button>
        </form>
      </div>
    );
  }
}
